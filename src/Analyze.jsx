import React, { useRef, useState, useCallback } from "react";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Webcam from "react-webcam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faUpload,
  faXmark,
  faNotesMedical,
  faFileMedical,
} from "@fortawesome/free-solid-svg-icons";

const Analyze = () => {
  const webcamRef = useRef(null);

  const [image, setImage] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setCameraOpen(false);
  }, [webcamRef]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const patient = {
  id: 1,
  status: "Pending Review",
  submittedAt: "2026-06-11 09:45 AM",

  patientInfo: {
    name: "John Doe",
    age: 58,
    gender: "Male",
    phone: "+234 801 234 5678",
    email: "johndoe@example.com",
  },

  images: [
    "/woundImage.jfif",
    // "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
  ],

  assessment: {
    woundSize: 6,
    painLevel: 8,
    painType: "Throbbing",
    painTiming: "Worse at night",

    sensationChanges: "Tingling",

    drainageVolume: "Moderate",
    drainageColor: "Yellow / Creamy",

    woundOdor: "Mild",

    skinTemperature: "Hot / Warm",

    rednessSpreading: "Yes",

    systemicSigns: "No",

    dressingFrequency: "Once daily",

    dressingAdherence: "No trouble",

    productChanges: "No",

    woundCause: "Specific trauma (fall injury)",

    bloodSugar: "165 mg/dL",

    pressureRelief: "No"
  }
};

  return (
    <>
      <Nav />

        <div className="bg-base-200 min-h-screen p-4 md:p-8">
            <div className="max-w-450 mx-auto">

                <div className="grid lg:grid-cols-12 gap-6">

                {/* Patients */}
                <div className="lg:col-span-3 card bg-base-100 shadow-xl">
                    <div className="card-body">

                    <input
                        type="text"
                        placeholder="Search patient..."
                        className="input input-bordered"
                    />

                    <div className="mt-4 space-y-3">

                        <div className="p-4 rounded-xl bg-primary text-primary-content cursor-pointer">
                        John Doe
                        </div>

                        <div className="p-4 rounded-xl bg-base-200 cursor-pointer">
                        Mary Smith
                        </div>

                        <div className="p-4 rounded-xl bg-base-200 cursor-pointer">
                        Michael Johnson
                        </div>

                    </div>

                    </div>
                </div>

                {/* Patient Submission */}
                <div className="lg:col-span-5 card bg-base-100 shadow-xl">
                    <div className="card-body">

                        <div className="flex justify-between items-center">
                        <h2 className="card-title text-primary">
                            Patient Submission
                        </h2>

                        <div className="badge badge-warning">
                            {patient.status}
                        </div>
                        </div>

                        {/* ==========================
                            PATIENT INFORMATION
                        ========================== */}

                        <div className="divider">
                        Patient Information
                        </div>

                        <div className="grid md:grid-cols-2 gap-3">

                        <div className="bg-base-200 p-4 rounded-xl">
                            <p className="text-xs opacity-70">Patient Name</p>
                            <p className="font-semibold">
                            {patient.patientInfo.name}
                            </p>
                        </div>

                        <div className="bg-base-200 p-4 rounded-xl">
                            <p className="text-xs opacity-70">Age</p>
                            <p className="font-semibold">
                            {patient.patientInfo.age}
                            </p>
                        </div>

                        <div className="bg-base-200 p-4 rounded-xl">
                            <p className="text-xs opacity-70">Gender</p>
                            <p className="font-semibold">
                            {patient.patientInfo.gender}
                            </p>
                        </div>

                        <div className="bg-base-200 p-4 rounded-xl">
                            <p className="text-xs opacity-70">Submitted</p>
                            <p className="font-semibold">
                            {patient.submittedAt}
                            </p>
                        </div>

                        <div className="bg-base-200 p-4 rounded-xl">
                            <p className="text-xs opacity-70">Phone</p>
                            <p className="font-semibold">
                            {patient.patientInfo.phone}
                            </p>
                        </div>

                        <div className="bg-base-200 p-4 rounded-xl">
                            <p className="text-xs opacity-70">Email</p>
                            <p className="font-semibold break-all">
                            {patient.patientInfo.email}
                            </p>
                        </div>

                        </div>

                        {/* ==========================
                            WOUND IMAGES
                        ========================== */}

                        <div className="divider">
                        Wound Image
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                        {patient.images.map((img, index) => (
                            <img
                            key={index}
                            src={img}
                            alt={`Wound ${index + 1}`}
                            className="rounded-xl h-48 w-full object-cover"
                            />
                        ))}
                        </div>

                        {/* ==========================
                            WOUND SIZE
                        ==========================*/}

                        <div className="divider">
                            Wound Size (cm²)
                        </div>

                        <div className="grid md:grid-cols-1 gap-3 text-center">
                            <div className="stat bg-base-200 rounded-xl">
                                <div className="stat-title">Size</div>
                                <div className="stat-value text-primary">
                                {patient.assessment.woundSize}
                                </div>
                            </div>
                        </div>

                        {/* ==========================
                            PAIN & SENSATION
                        ========================== */}

                        <div className="divider">
                            Pain & Sensation
                        </div>

                        <div className="grid md:grid-cols-2 gap-3">
                            <div className="stat bg-base-200 rounded-xl">
                                <div className="stat-title">Pain Level</div>
                                <div className="stat-value text-error">
                                {patient.assessment.painLevel}/10
                                </div>
                            </div>

                            <div className="stat bg-base-200 rounded-xl">
                                <div className="stat-title">Pain Type</div>
                                <div className="stat-desc text-lg">
                                {patient.assessment.painType}
                                </div>
                            </div>

                            <div className="stat bg-base-200 rounded-xl">
                                <div className="stat-title">Pain Timing</div>
                                <div className="stat-desc text-lg">
                                {patient.assessment.painTiming}
                                </div>
                            </div>

                            <div className="stat bg-base-200 rounded-xl">
                                <div className="stat-title">Sensation</div>
                                <div className="stat-desc text-lg">
                                {patient.assessment.sensationChanges}
                                </div>
                            </div>
                        </div>

                        {/* ==========================
                            DRAINAGE & ODOR
                        ========================== */}

                        <div className="divider">
                        Drainage & Odor
                        </div>

                        <div className="grid md:grid-cols-3 gap-3">

                        <div className="alert">
                            <span>
                                Drainage: <span className="text-secondary">{patient.assessment.drainageVolume}</span>
                            </span>
                        </div>

                        <div className="alert">
                            <span>
                            Color: <span className="text-secondary">{patient.assessment.drainageColor}</span>
                            </span>
                        </div>

                        <div className="alert">
                            <span>
                            Odor: <span className="text-secondary">{patient.assessment.woundOdor}</span>
                            </span>
                        </div>

                        </div>

                        {/* ==========================
                            INFECTION INDICATORS
                        ========================== */}

                        <div className="divider">
                        Infection Indicators
                        </div>

                        <div className="space-y-3">

                        <div className="flex justify-between bg-base-200 p-3 rounded-xl">
                            <span>Skin Temperature</span>
                            <span className="font-semibold">
                            {patient.assessment.skinTemperature}
                            </span>
                        </div>

                        <div className="flex justify-between bg-base-200 p-3 rounded-xl">
                            <span>Spreading Redness</span>
                            <span className="font-semibold">
                            {patient.assessment.rednessSpreading}
                            </span>
                        </div>

                        <div className="flex justify-between bg-base-200 p-3 rounded-xl">
                            <span>Fever / Chills</span>
                            <span className="font-semibold">
                            {patient.assessment.systemicSigns}
                            </span>
                        </div>

                        </div>

                        {/* ==========================
                            DRESSING HISTORY
                        ========================== */}

                        <div className="divider">
                        Dressing History
                        </div>

                        <div className="space-y-3">

                        <div className="flex justify-between bg-base-200 p-3 rounded-xl">
                            <span>Frequency</span>
                            <span>{patient.assessment.dressingFrequency}</span>
                        </div>

                        <div className="flex justify-between bg-base-200 p-3 rounded-xl">
                            <span>Dressing Dry?</span>
                            <span>{patient.assessment.dressingAdherence}</span>
                        </div>

                        <div className="flex justify-between bg-base-200 p-3 rounded-xl">
                            <span>New Products</span>
                            <span>{patient.assessment.productChanges}</span>
                        </div>

                        </div>

                        {/* ==========================
                            SYSTEMIC FACTORS
                        ========================== */}

                        <div className="divider">
                        Systemic Factors
                        </div>

                        <div className="space-y-3">

                        <div className="flex justify-between bg-base-200 p-3 rounded-xl">
                            <span>Wound Cause</span>
                            <span>{patient.assessment.woundCause}</span>
                        </div>

                        <div className="flex justify-between bg-base-200 p-3 rounded-xl">
                            <span>Blood Sugar</span>
                            <span>{patient.assessment.bloodSugar}</span>
                        </div>

                        <div className="flex justify-between bg-base-200 p-3 rounded-xl">
                            <span>Pressure Relief</span>
                            <span>{patient.assessment.pressureRelief}</span>
                        </div>

                        </div>

                    </div>
                </div>

                {/* Professional Review */}
                <div className="lg:col-span-4 card bg-base-100 shadow-xl">
                    <div className="card-body">

                    <h2 className="card-title">
                        Professional Assessment
                    </h2>

                    <div className="space-y-4">

                        <select className="select select-bordered w-full">
                        <option>Select Severity</option>
                        <option>Low Risk</option>
                        <option>Moderate Risk</option>
                        <option>High Risk</option>
                        <option>Urgent</option>
                        </select>

                        <select className="select select-bordered w-full">
                        <option>Select Diagnosis</option>
                        <option>Healing Normally</option>
                        <option>Delayed Healing</option>
                        <option>Possible Infection</option>
                        <option>Requires Immediate Care</option>
                        </select>

                        <textarea
                        className="textarea textarea-bordered h-32 resize-none"
                        placeholder="Clinical findings..."
                        />

                        <textarea
                        className="textarea textarea-bordered h-32 resize-none"
                        placeholder="Treatment recommendations..."
                        />

                        <label htmlFor="date">Date:</label>
                        <input
                            id="date"
                            type="date"
                            className="input input-bordered"
                            placeholder="Date"
                        />

                        <button className="btn btn-primary w-full">
                        Save Assessment
                        </button>

                    </div>

                    </div>
                </div>

                </div>

            </div>
        </div>

      <Footer />
    </>
  );
};

export default Analyze;