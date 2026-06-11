import React, { useRef, useState, useCallback, useEffect } from 'react';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Webcam from 'react-webcam';

const Capture = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [flashOn, setFlashOn] = useState(false);

    // --- State Variables for Interactive 1cm Grid System ---
    const imgWrapperRef = useRef(null);
    const [gridDimensions, setGridDimensions] = useState({ columns: 0, rows: 0 });
    const [selectedBoxes, setSelectedBoxes] = useState({}); // Stores coordinates like { "col-row": true }

    // Toggle flash handler
    const toggleFlash = async () => {
        if (!webcamRef.current || !webcamRef.current.stream) return;
        const videoTrack = webcamRef.current.stream.getVideoTracks();
        if (videoTrack && typeof videoTrack.applyConstraints === 'function') {
            try {
                const nextFlashState = !flashOn;
                await videoTrack.applyConstraints({ advanced: [{ torch: nextFlashState }] });
                setFlashOn(nextFlashState);
            } catch (error) {
                console.error("Flash error:", error);
                alert("Flashlight control is blocked or unsupported on this device.");
            }
        }
    };

    // Capture snapshot handler
    const capture = useCallback(() => {
        if (!webcamRef.current) return;
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        setSelectedBoxes({}); // Clear previous selections when a new picture is taken
    }, [webcamRef]);

    // Calculate exactly how many 1cm boxes fit into the rendered container
    const handleImageLoad = () => {
        if (!imgWrapperRef.current) return;

        // Create a temporary hidden element to measure the browser's exact pixel conversion of 1cm
        const dummy = document.createElement('div');
        dummy.style.width = '1cm';
        dummy.style.visibility = 'hidden';
        document.body.appendChild(dummy);
        const pixelsPerCm = dummy.getBoundingClientRect().width;
        document.body.removeChild(dummy);

        // Get the active rendered bounding dimensions of the responsive container box
        const { width, height } = imgWrapperRef.current.getBoundingClientRect();

        // Compute row and column boundaries based on screen metrics
        const columns = Math.floor(width / pixelsPerCm);
        const rows = Math.floor(height / pixelsPerCm);

        setGridDimensions({ columns, rows });
    };

    // Handle recalculation if device changes orientation or scales resizing views
    useEffect(() => {
        if (imgSrc) {
            window.addEventListener('resize', handleImageLoad);
        }
        return () => window.removeEventListener('resize', handleImageLoad);
    }, [imgSrc]);

    // Toggle the selection state of a targeted grid coordinate box
    const toggleBoxSelection = (colIdx, rowIdx) => {
        const key = `${colIdx}-${rowIdx}`;
        setSelectedBoxes((prev) => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    // Calculate total count of highlighted grid boxes
    const totalSelectedCount = Object.values(selectedBoxes).filter(Boolean).length;

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: { exact: "environment" }
    };

    const showMeasure = (e) => {
        e.preventDefault();
        console.log(totalSelectedCount)
    }

    return (
        <div>
            <Nav />
            
            <div className="flex flex-col items-center gap-4 p-4 min-h-screen bg-base-100 text-base-content">
                <div className="overflow-hidden rounded-lg border border-base-300">
                    <Webcam
                        audio={false} 
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        className="w-full max-w-md"
                    />
                </div>

                <div className="flex gap-2 w-full max-w-md justify-center">
                    <button onClick={capture} className="btn btn-primary flex-1">Capture Photo</button>
                    <button onClick={toggleFlash} className={`btn ${flashOn ? 'btn-warning' : 'btn-neutral'}`}>
                        {flashOn ? '⚡ Flash On' : '🔦 Flash Off'}
                    </button>
                </div>

                {/* --- Interactive Preview Area --- */}
                {imgSrc && (
                    <div className="mt-4 flex flex-col items-center gap-2 w-full"> 
                        <div className="flex justify-between items-center w-full max-w-md px-1">
                            <h3 className="text-sm font-semibold">Preview Dashboard: </h3>
                            <span className="badge badge-secondary font-mono text-sm">
                                Selected Area: {totalSelectedCount} cm²
                            </span>
                        </div>
                        <p>[Tap on wound area to measure]</p>
                        
                        {/* Wrapper references dimensions dynamically */}
                        <div 
                            ref={imgWrapperRef}
                            className="relative w-full max-w-md rounded overflow-hidden border border-base-300 shadow-md select-none"
                        >
                            <img 
                                src={imgSrc} 
                                alt="Captured preview" 
                                className="w-full object-cover block" 
                                onLoad={handleImageLoad}
                            />

                            {/* Clickable Grid Coordinate Canvas Overlay */}
                            {gridDimensions.columns > 0 && (
                                <div 
                                    className="absolute inset-0 grid bg-transparent"
                                    style={{
                                        gridTemplateColumns: `repeat(${gridDimensions.columns}, 1cm)`,
                                        gridTemplateRows: `repeat(${gridDimensions.rows}, 1cm)`,
                                    }}
                                >
                                    {Array.from({ length: gridDimensions.rows }).map((_, rowIdx) => (
                                        Array.from({ length: gridDimensions.columns }).map((_, colIdx) => {
                                            const isSelected = !!selectedBoxes[`${colIdx}-${rowIdx}`];
                                            return (
                                                <div
                                                    key={`${colIdx}-${rowIdx}`}
                                                    onClick={() => toggleBoxSelection(colIdx, rowIdx)}
                                                    className={`
                                                        border-r border-b border-emerald-500/40 cursor-pointer transition-colors duration-150
                                                        ${isSelected ? 'bg-yellow-200/60' : 'hover:bg-emerald-500/10'}
                                                    `}
                                                    style={{ width: '1cm', height: '1cm' }}
                                                />
                                            );
                                        })
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        {totalSelectedCount > 0 && (
                            <button 
                                onClick={() => setSelectedBoxes({})} 
                                className="btn btn-outline btn-xs mt-1"
                            >
                                Clear Selection
                            </button>
                        )}
                    </div>
                )}

                {/* Form for entering other data */}
                <div className="min-h-screen bg-base-200 py-12 px-2">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="max-w-7xl mx-auto bg-base-100 shadow-2xl rounded-3xl px-4 py-6 md:p-10 border border-base-300"
                        >
                        {/* Header */}
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                            Wound Assessment Form
                            </h2>
                            <p className="text-base-content/70 mt-2">
                            Please provide accurate information for proper wound evaluation.
                            </p>
                        </div>

                        {/* Form Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                            {/* Pain Level */}
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                Pain Level (0-10)
                                </span>
                            </label>
                            <select
                                id="painLevel"
                                name="painLevel"
                                className="select select-bordered w-full"
                                required
                                defaultValue=""
                            >
                                <option value="" disabled>Select pain level...</option>
                                <option value="0">0 - No Pain</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5 - Moderate Pain</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10 - Worst Possible Pain</option>
                            </select>
                            </div>

                            {/* Pain Type */}
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                Pain Type
                                </span>
                            </label>
                            <select
                                id="painType"
                                name="painType"
                                className="select select-bordered w-full"
                                defaultValue=""
                            >
                                <option value="" disabled>Select type of pain...</option>
                                <option value="none">None</option>
                                <option value="throbbing">Throbbing</option>
                                <option value="burning">Burning</option>
                                <option value="sharp">Sharp</option>
                                <option value="dull">Dull/Aching</option>
                                <option value="other">Other</option>
                            </select>
                            </div>

                            {/* Pain Timing */}
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                When is pain worst?
                                </span>
                            </label>
                            <select
                                id="painTiming"
                                name="painTiming"
                                className="select select-bordered w-full"
                                defaultValue=""
                            >
                                <option value="" disabled>Select timing...</option>
                                <option value="constant">Constant pain</option>
                                <option value="night">Worse at night</option>
                                <option value="movement">Worse during movement</option>
                                <option value="dressing_change">Worse during dressing changes</option>
                                <option value="none">No pain</option>
                            </select>
                            </div>

                            {/* Sensation */}
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                Sensation Changes
                                </span>
                            </label>
                            <select
                                id="sensationChanges"
                                name="sensationChanges"
                                className="select select-bordered w-full"
                                defaultValue="normal"
                            >
                                <option value="normal">Normal sensation</option>
                                <option value="numbness">Numbness</option>
                                <option value="tingling">Tingling</option>
                                <option value="hypersensitive">Increased sensitivity</option>
                            </select>
                            </div>

                            {/* Drainage Amount */}
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                Drainage Amount
                                </span>
                            </label>
                            <select
                                id="drainageVolume"
                                name="drainageVolume"
                                className="select select-bordered w-full"
                                required
                                defaultValue=""
                            >
                                <option value="" disabled>Select volume...</option>
                                <option value="none">None</option>
                                <option value="minimal">Minimal</option>
                                <option value="moderate">Moderate</option>
                                <option value="saturated">Saturated</option>
                            </select>
                            </div>

                            {/* Drainage Color */}
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                Drainage Color
                                </span>
                            </label>
                            <select
                                id="drainageColor"
                                name="drainageColor"
                                className="select select-bordered w-full"
                                defaultValue=""
                            >
                                <option value="" disabled>Select color...</option>
                                <option value="none">No drainage</option>
                                <option value="clear">Clear / Straw-colored</option>
                                <option value="yellow">Yellow / Creamy</option>
                                <option value="green">Greenish</option>
                                <option value="bloody">Bloody / Pink</option>
                            </select>
                            </div>

                            {/* Odor */}
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                Wound Odor
                                </span>
                            </label>
                            <select
                                id="woundOdor"
                                name="woundOdor"
                                className="select select-bordered w-full"
                                defaultValue="none"
                            >
                                <option value="none">No odor</option>
                                <option value="mild">Mild odor</option>
                                <option value="strong">Strong odor</option>
                            </select>
                            </div>

                            {/* Skin Temperature */}
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                Skin Temperature
                                </span>
                            </label>
                            <select
                                id="skinTemperature"
                                name="skinTemperature"
                                className="select select-bordered w-full"
                                defaultValue="normal"
                            >
                                <option value="normal">Normal / Cool</option>
                                <option value="hot">Hot / Warm</option>
                            </select>
                            </div>

                            {/* Redness */}
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                Redness Spreading?
                                </span>
                            </label>
                            <select
                                id="rednessSpreading"
                                name="rednessSpreading"
                                className="select select-bordered w-full"
                                defaultValue="no"
                            >
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </select>
                            </div>

                            {/* Systemic Signs */}
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                Fever, Chills or Body Aches?
                                </span>
                            </label>
                            <select
                                id="systemicSigns"
                                name="systemicSigns"
                                className="select select-bordered w-full"
                                required
                                defaultValue="no"
                            >
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </select>
                            </div>

                            {/* Dressing Frequency */}
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                Dressing Change Frequency
                                </span>
                            </label>
                            <select
                                id="dressingFrequency"
                                name="dressingFrequency"
                                className="select select-bordered w-full"
                                defaultValue=""
                            >
                                <option value="" disabled>Select frequency...</option>
                                <option value="multiple_daily">Multiple times daily</option>
                                <option value="once_daily">Once daily</option>
                                <option value="every_other_day">Every other day</option>
                                <option value="twice_weekly">Twice weekly</option>
                                <option value="weekly">Weekly</option>
                            </select>
                            </div>

                            {/* Blood Sugar */}
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                Blood Sugar (If Diabetic)
                                </span>
                            </label>
                            <input
                                type="text"
                                id="bloodSugar"
                                name="bloodSugar"
                                placeholder="e.g. 120 mg/dL or N/A"
                                className="input input-bordered w-full"
                            />
                            </div>

                            {/* Pressure Relief */}
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                Weight Off Wound Area?
                                </span>
                            </label>
                            <select
                                id="pressureRelief"
                                name="pressureRelief"
                                className="select select-bordered w-full"
                                defaultValue="not_applicable"
                            >
                                <option value="not_applicable">Not applicable</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            </div>

                        </div>

                        {/* Submit Button */}
                        <div className="mt-10 flex justify-center">
                            <button
                            type="submit"
                            className="btn btn-primary btn-lg px-10 shadow-xl hover:scale-105 transition-all duration-300"
                            >
                            Submit Wound Assessment
                            </button>
                        </div>
                    </form>
                </div>


            </div>

            <Footer />
        </div>
    );
};

export default Capture;
