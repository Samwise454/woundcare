<form onSubmit={(e) => e.preventDefault()} className="max-w-3xl mx-auto p-4 md:p-8 space-y-8">
  {/* Header */}
  <div className="mb-8">
    <h1 className="text-3xl font-bold text-base-content mb-2">Wound assessment</h1>
    <p className="text-base-content/70">Please provide detailed information to help with assessment and care planning</p>
  </div>

  {/* Symptoms & Sensation Section */}
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-base-content border-b-2 border-primary pb-3">Symptoms & Sensation</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Pain Level (0-10)</span>
        </label>
        <select name="painLevel" required defaultValue="" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="" disabled>Select pain level...</option>
          <option value="0">0 - No pain</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 - Moderate pain</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10 - Worst possible pain</option>
        </select>
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Pain Type</span>
        </label>
        <select name="painType" defaultValue="" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="" disabled>Select type of pain...</option>
          <option value="none">None</option>
          <option value="throbbing">Throbbing</option>
          <option value="burning">Burning</option>
          <option value="sharp">Sharp</option>
          <option value="dull">Dull / Aching</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">When is pain worst?</span>
        </label>
        <select name="painTiming" defaultValue="" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="" disabled>Select timing...</option>
          <option value="constant">Constant pain</option>
          <option value="night">Worse at night</option>
          <option value="movement">Worse during movement</option>
          <option value="dressing_change">Worse during dressing changes</option>
          <option value="none">No pain</option>
        </select>
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Sensation Changes</span>
        </label>
        <select name="sensationChanges" defaultValue="normal" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="normal">Normal sensation</option>
          <option value="numbness">Numbness / Loss of feeling</option>
          <option value="tingling">Tingling / Pins and needles</option>
          <option value="hypersensitive">Increased sensitivity</option>
        </select>
      </div>
    </div>
  </div>

  {/* Drainage & Odor Section */}
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-base-content border-b-2 border-primary pb-3">Drainage & Odor</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Drainage Amount</span>
        </label>
        <select name="drainageVolume" required defaultValue="" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="" disabled>Select volume...</option>
          <option value="none">None (Dry dressing)</option>
          <option value="minimal">Minimal (Small spot)</option>
          <option value="moderate">Moderate (Dressing wet but not leaking)</option>
          <option value="saturated">Saturated (Leaking / Soaked through)</option>
        </select>
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Drainage Color</span>
        </label>
        <select name="drainageColor" defaultValue="" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="" disabled>Select color...</option>
          <option value="none">No drainage</option>
          <option value="clear">Clear / Straw-colored</option>
          <option value="yellow">Thick yellow / Creamy</option>
          <option value="green">Greenish</option>
          <option value="bloody">Bloody / Pink</option>
        </select>
      </div>

      <div className="form-control w-full md:col-span-2">
        <label className="label">
          <span className="label-text font-medium">Wound Odor</span>
        </label>
        <select name="woundOdor" defaultValue="none" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="none">No odor</option>
          <option value="mild">Mild odor (only when up close)</option>
          <option value="strong">Strong / Foul smell</option>
        </select>
      </div>
    </div>
  </div>

  {/* Infection Warning Signs Section */}
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-base-content border-b-2 border-error pb-3">Infection Warning Signs</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Skin Temperature</span>
        </label>
        <select name="skinTemperature" defaultValue="normal" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="normal">Normal / Cool</option>
          <option value="hot">Hot / Warm to the touch</option>
        </select>
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Redness or Swelling</span>
        </label>
        <select name="rednessSpreading" defaultValue="no" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="no">No change / Decreasing</option>
          <option value="yes">Yes, spreading further out</option>
        </select>
      </div>

      <div className="form-control w-full md:col-span-2">
        <label className="label">
          <span className="label-text font-medium">Fever, Chills, or Body Aches?</span>
        </label>
        <select name="systemicSigns" required defaultValue="no" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="no">No systemic symptoms</option>
          <option value="yes">Yes, experiencing fever / chills / aches</option>
        </select>
      </div>
    </div>
  </div>

  {/* Dressing & Care History Section */}
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-base-content border-b-2 border-primary pb-3">Dressing & Care History</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Change Frequency</span>
        </label>
        <select name="dressingFrequency" defaultValue="" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="" disabled>Select frequency...</option>
          <option value="multiple_daily">Multiple times a day</option>
          <option value="once_daily">Once a day</option>
          <option value="every_other_day">Every other day</option>
          <option value="twice_weekly">Twice a week</option>
          <option value="weekly">Once a week</option>
        </select>
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Dressing Issues?</span>
        </label>
        <select name="dressingAdherence" defaultValue="no" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="no">No trouble</option>
          <option value="yes">Yes (peeling off, getting wet)</option>
        </select>
      </div>

      <div className="form-control w-full md:col-span-2">
        <label className="label">
          <span className="label-text font-medium">New Ointments or Creams?</span>
        </label>
        <select name="productChanges" defaultValue="no" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="no">No, using prescribed care only</option>
          <option value="yes">Yes, applied unprescribed products</option>
        </select>
      </div>
    </div>
  </div>

  {/* Systemic & Lifestyle Factors Section */}
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-base-content border-b-2 border-primary pb-3">Systemic & Lifestyle Factors</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">How Did Wound Start?</span>
        </label>
        <select name="woundCause" defaultValue="" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="" disabled>Select cause...</option>
          <option value="trauma">Specific trauma (bump, scratch, fall)</option>
          <option value="spontaneous">Appeared on its own / Unknown</option>
          <option value="surgical">Surgical incision</option>
        </select>
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Blood Sugar (if diabetic)</span>
        </label>
        <input type="text" name="bloodSugar" placeholder="e.g., 120 mg/dL or N/A" className="input input-bordered w-full focus:outline-none focus:border-primary" />
      </div>

      <div className="form-control w-full md:col-span-2">
        <label className="label">
          <span className="label-text font-medium">Pressure Relief</span>
        </label>
        <select name="pressureRelief" defaultValue="not_applicable" className="select select-bordered w-full focus:outline-none focus:border-primary">
          <option value="not_applicable">Not applicable (not a pressure area)</option>
          <option value="yes">Yes, practicing offloading / turning</option>
          <option value="no">No, difficult to keep weight off</option>
        </select>
      </div>
    </div>
  </div>

  {/* Submit Button */}
  <div className="flex flex-col sm:flex-row gap-3 pt-6">
    <button type="submit" className="btn btn-primary flex-1">
      Submit assessment
    </button>
    <button type="reset" className="btn btn-outline flex-1">
      Clear form
    </button>
  </div>
</form>