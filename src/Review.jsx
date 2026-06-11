import React from "react";
import Nav from "./component/Nav";
import Footer from "./component/Footer";

const Review = () => {

  const review = {
  patientName: "John Doe",

  status: "Reviewed",

  severity: "Moderate Risk",

  diagnosis: "Possible Infection",

  reviewedAt: "11 June 2026",

  followUpDate: "18 June 2026",

  clinician: "Onyebodo Chiemezuo",

  woundImages: ["/woundImage.jfif"],

  findings:
    "The wound demonstrates moderate drainage with surrounding erythema and mild warmth. No systemic symptoms were reported. Healing progress is slower than expected and there are early signs suggestive of localized infection.",

  treatmentPlan: [
    "Clean wound daily with sterile saline solution.",
    "Apply prescribed antimicrobial dressing once daily.",
    "Keep wound area dry and protected.",
    "Avoid unnecessary pressure on the affected area.",
    "Monitor for increased redness, swelling, or foul odor."
  ],

  recommendations: [
    "Increase protein intake to support wound healing.",
    "Maintain blood sugar within target range.",
    "Seek immediate care if fever develops.",
    "Attend scheduled follow-up assessment."
  ],

  timeline: [
    {
      date: "01 June 2026",
      title: "Initial Submission",
      description:
        "Patient submitted wound image and completed assessment questionnaire.",
      status: "submitted"
    },
    {
      date: "05 June 2026",
      title: "Image Review",
      description:
        "Healthcare professional reviewed wound photograph and symptoms.",
      status: "review"
    },
    {
      date: "11 June 2026",
      title: "Clinical Assessment Completed",
      description:
        "Treatment plan and wound care recommendations provided.",
      status: "completed"
    },
    {
      date: "18 June 2026",
      title: "Scheduled Follow-Up",
      description:
        "Patient to submit new wound image and healing progress update.",
      status: "upcoming"
    }
  ]
};

  return (
    <>
      <Nav />

      <div className="bg-base-200 min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="card bg-base-100 shadow-xl mb-6">
            <div className="card-body">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                {/* Left Side */}
                <div>
                    <h1 className="text-3xl font-bold text-primary">
                    Wound Care Review
                    </h1>

                    <p className="text-base-content/70 mt-2">
                    Assessment and treatment plan provided by your healthcare professional.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-4">

                    <div className="badge badge-success badge-lg">
                        {review.status}
                    </div>

                    {/* <div className="badge badge-outline">
                        Reviewed by {review.clinician}
                    </div> */}

                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col gap-4">

                    {/* Patient Rating Display */}

                    <div className="bg-base-200 rounded-xl p-4">

                    <p className="text-sm font-semibold mb-2">
                        Patient Satisfaction Rating
                    </p>

                    <div className="flex items-center gap-2">

                        <div className="rating rating-md">

                        <input
                            type="radio"
                            name="rating-display"
                            className="mask mask-star-2 bg-warning"
                            checked
                            readOnly
                        />

                        <input
                            type="radio"
                            name="rating-display"
                            className="mask mask-star-2 bg-warning"
                            checked
                            readOnly
                        />

                        <input
                            type="radio"
                            name="rating-display"
                            className="mask mask-star-2 bg-warning"
                            checked
                            readOnly
                        />

                        <input
                            type="radio"
                            name="rating-display"
                            className="mask mask-star-2 bg-warning"
                            checked
                            readOnly
                        />

                        <input
                            type="radio"
                            name="rating-display"
                            className="mask mask-star-2 bg-warning"
                            readOnly
                        />

                        </div>

                        <span className="font-bold">
                        4.0/5
                        </span>

                    </div>

                    <p className="text-xs opacity-70 mt-1">
                        Based on 124 patient reviews
                    </p>

                    </div>

                    {/* Actions */}

                    <div className="flex flex-wrap gap-3">
                        <button className="btn btn-primary">
                            Share Review
                        </button>

                        <button className="btn btn-outline">
                            Rate This Review
                        </button>
                    </div>
                </div>

                </div>

            </div>
        </div>

          {/* Patient Overview */}

          <div className="card bg-base-100 shadow-xl mb-6">
            <div className="card-body">

              <h2 className="card-title">
                Patient Information
              </h2>

              <div className="grid md:grid-cols-4 gap-4 mt-4">

                <div className="bg-base-200 rounded-xl p-4">
                  <p className="text-xs opacity-70">
                    Patient
                  </p>
                  <p className="font-semibold">
                    {review.patientName}
                  </p>
                </div>

                <div className="bg-base-200 rounded-xl p-4">
                  <p className="text-xs opacity-70">
                    Severity
                  </p>
                  <p className="font-semibold text-warning">
                    {review.severity}
                  </p>
                </div>

                <div className="bg-base-200 rounded-xl p-4">
                  <p className="text-xs opacity-70">
                    Diagnosis
                  </p>
                  <p className="font-semibold">
                    {review.diagnosis}
                  </p>
                </div>

                <div className="bg-base-200 rounded-xl p-4">
                  <p className="text-xs opacity-70">
                    Reviewed On
                  </p>
                  <p className="font-semibold">
                    {review.reviewedAt}
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Wound Image */}

          <div className="card bg-base-100 shadow-xl mb-6">
            <div className="card-body">

              <h2 className="card-title">
                Wound Image
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mt-4">

                {review.woundImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Wound"
                    className="rounded-xl border w-full h-72 object-cover"
                  />
                ))}

              </div>

            </div>
          </div>

          {/* Healing Timeline */}

<div className="card bg-base-100 shadow-xl mb-6">
  <div className="card-body">

    <h2 className="card-title text-primary">
      Healing Progress Timeline
    </h2>

    <p className="text-base-content/70">
      Track your wound care journey and treatment milestones.
    </p>

    <ul className="timeline timeline-vertical mt-6">

      {review.timeline.map((item, index) => (
        <li key={index}>

          {index !== 0 && <hr />}

          <div className="timeline-start text-sm opacity-70">
            {item.date}
          </div>

          <div className="timeline-middle">
            <div
              className={`
                badge
                ${
                  item.status === "completed"
                    ? "badge-success"
                    : item.status === "review"
                    ? "badge-primary"
                    : item.status === "upcoming"
                    ? "badge-warning"
                    : "badge-neutral"
                }
              `}
            >
              ●
            </div>
          </div>

          <div className="timeline-end timeline-box">

            <h3 className="font-bold">
              {item.title}
            </h3>

            <p className="text-sm opacity-80 mt-1">
              {item.description}
            </p>

          </div>

          {index !== review.timeline.length - 1 && <hr />}
        </li>
      ))}

    </ul>

  </div>
</div>

          {/* Findings */}

          <div className="card bg-base-100 shadow-xl mb-6">
            <div className="card-body">

              <h2 className="card-title text-secondary">
                Clinical Findings
              </h2>

              <div className="bg-base-200 p-5 rounded-xl mt-3 leading-7">
                {review.findings}
              </div>

            </div>
          </div>

          {/* Treatment Plan */}

          <div className="card bg-base-100 shadow-xl mb-6">
            <div className="card-body">

              <h2 className="card-title text-primary">
                Treatment Plan
              </h2>

              <div className="mt-4 space-y-3">

                {review.treatmentPlan.map((item, index) => (
                  <div
                    key={index}
                    className="alert"
                  >
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>
          </div>

          {/* Recommendations */}

          <div className="card bg-base-100 shadow-xl mb-6">
            <div className="card-body">

              <h2 className="card-title text-accent">
                Healthcare Recommendations
              </h2>

              <div className="mt-4 space-y-3">

                {review.recommendations.map((item, index) => (
                  <div
                    key={index}
                    className="alert"
                  >
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>
          </div>

          {/* Follow Up */}

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">

              <h2 className="card-title">
                Follow-Up Appointment
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mt-4">

                <div className="stat bg-base-200 rounded-xl">
                  <div className="stat-title">
                    Follow-Up Date
                  </div>

                  <div className="stat-value text-primary text-2xl">
                    {review.followUpDate}
                  </div>
                </div>

                <div className="stat bg-base-200 rounded-xl">
                  <div className="stat-title">
                    Reviewed By
                  </div>

                  <div className="stat-value text-xl">
                    {review.clinician}
                  </div>
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

export default Review;