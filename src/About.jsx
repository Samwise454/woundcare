import React from "react";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Nav />

      <div className="bg-base-200 min-h-screen">

        {/* Hero Section */}
        <section className="hero py-16 md:py-24">
          <div className="hero-content text-center max-w-5xl">
            <div>
              <div className="badge badge-secondary badge-lg mb-4">
                Professional Wound Care Platform
              </div>

              <h1 className="text-4xl md:text-6xl font-bold">
                About Our Wound Care Service
              </h1>

              <p className="py-6 text-lg text-base-content/80 max-w-3xl mx-auto">
                We connect patients with healthcare professionals through a
                secure digital platform designed to improve wound monitoring,
                assessment, treatment planning, and healing outcomes.
              </p>

              {/* <button className="btn btn-primary btn-lg">
                Learn More
              </button> */}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">

              <h2 className="card-title text-3xl text-primary">
                Our Mission
              </h2>

              <p className="leading-8 text-base-content/80">
                Our mission is to make professional wound care more accessible,
                efficient, and patient-centered. We understand that timely wound
                assessment and treatment can significantly improve healing
                outcomes and quality of life. Through technology, we bridge the
                gap between patients and healthcare professionals, ensuring
                expert guidance is available when it is needed most.
              </p>

            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="max-w-7xl mx-auto px-4 py-12">

          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">
              What We Do
            </h2>

            <p className="mt-3 text-base-content/70">
              Supporting patients throughout their wound healing journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  Wound Assessment
                </h3>
                <p>
                  Patients can securely submit wound images and detailed
                  information for professional evaluation.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  Professional Review
                </h3>
                <p>
                  Healthcare professionals analyze wound conditions and provide
                  evidence-based recommendations.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  Treatment Plans
                </h3>
                <p>
                  Personalized care plans help patients understand how to care
                  for their wounds effectively.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">
                  Progress Tracking
                </h3>
                <p>
                  Monitor wound healing over time through image comparisons,
                  reviews, and follow-up assessments.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-4 py-12">

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">

              <h2 className="card-title text-3xl text-primary mb-6">
                Why Choose Us?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="alert">
                  <span>
                    Access professional wound care guidance from anywhere.
                  </span>
                </div>

                <div className="alert">
                  <span>
                    Secure and confidential patient information management.
                  </span>
                </div>

                <div className="alert">
                  <span>
                    Easy-to-understand treatment recommendations.
                  </span>
                </div>

                <div className="alert">
                  <span>
                    Continuous monitoring of wound healing progress.
                  </span>
                </div>

                <div className="alert">
                  <span>
                    Faster access to professional assessment and feedback.
                  </span>
                </div>

                <div className="alert">
                  <span>
                    Improved communication between patients and healthcare providers.
                  </span>
                </div>

              </div>

            </div>
          </div>

        </section>

        {/* Values */}
        <section className="max-w-7xl mx-auto px-4 py-12">

          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <h3 className="text-2xl font-bold text-primary">
                  Compassion
                </h3>
                <p>
                  Every patient deserves personalized care, dignity, and support.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <h3 className="text-2xl font-bold text-primary">
                  Excellence
                </h3>
                <p>
                  We strive to maintain the highest standards of clinical review
                  and patient care.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <h3 className="text-2xl font-bold text-primary">
                  Innovation
                </h3>
                <p>
                  Leveraging technology to improve wound care accessibility and
                  outcomes.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* Statistics */}
        <section className="max-w-7xl mx-auto px-4 py-12">

          <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-base-100">

            <div className="stat">
              <div className="stat-title">
                Patient Assessments
              </div>
              <div className="stat-value text-primary">
                5,000+
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">
                Healthcare Professionals
              </div>
              <div className="stat-value text-secondary">
                150+
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">
                Satisfaction Rate
              </div>
              <div className="stat-value text-accent">
                98%
              </div>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-4 py-16">

          <div className="card bg-primary text-primary-content shadow-2xl">
            <div className="card-body text-center">

              <h2 className="text-4xl font-bold">
                Start Your Healing Journey Today
              </h2>

              <p className="max-w-2xl mx-auto">
                Submit your wound assessment, receive professional guidance,
                track your healing progress, and stay connected with healthcare
                professionals every step of the way.
              </p>

              <div className="mt-4">
                <Link to={"/Capture"}>
                    <button className="btn btn-neutral btn-lg">
                        Get Started
                    </button>
                </Link>
              </div>

            </div>
          </div>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default About;