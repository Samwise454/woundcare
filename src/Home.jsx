import React, { useRef, useState, useCallback, useEffect } from 'react';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Webcam from 'react-webcam';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faChartBar, faClipboardCheck, faFileMedical, faMicroscope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-base-100">
      <Nav />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-155 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="wound1.png"
              alt="Medical wound care"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/50 opacity-90"></div>

          {/* Hero Content */}
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className={`max-w-2xl transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="text-5xl md:text-6xl font-bold text-base-100 mb-6 leading-tight">
                Professional Wound Care at Your Fingertips
              </h1>
              <p className="text-xl text-base-200 mb-8">
                Real-time wound analysis and professional guidance for better healing outcomes
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to={"/Capture"}>
                  <button className="btn btn-lg btn-outline text-base-100 border-base-100 hover:bg-base-100 hover:text-primary">
                    Get Started
                  </button>
                </Link>
                <Link to={"/About"}>
                  <button className="btn btn-lg btn-ghost text-base-100 hover:bg-base-100/20">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 px-6 bg-base-100">



          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-base-content/70">Three powerful tools for comprehensive wound care management</p>
            </div>

            {/* Three Card Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Card 1: Patient - Take Picture */}
              <div className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="card-body">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/20 rounded-xl">
                        <FontAwesomeIcon icon={faCamera} className='text-base-content'/>
                      </div>
                    </div>
                    
                    <h3 className="card-title text-2xl justify-center">For Patients</h3>
                    <p className="text-base-content/70">
                      Capture a clear image of your wound using your device's camera. 
                      Our system guides you through the process to ensure quality photos 
                      for accurate analysis.
                    </p>
                    
                    <div className="card-actions justify-center mt-6">
                      <Link to={"/Capture"}>
                        <button className="btn btn-primary btn-wide gap-2">
                          <FontAwesomeIcon icon={faCamera}/>
                          Take a Picture
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: AI Analysis */}
              <div className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '400ms' }}>
                <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="card-body">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-secondary/20 rounded-xl">
                        <FontAwesomeIcon icon={faChartBar}/>
                      </div>
                    </div>
                    
                    <h3 className="card-title text-2xl justify-center">Real Human Analysis</h3>
                    <p className="text-base-content/70">
                      Our Professionals analyzes wound characteristics including size, depth, infection signs, and healing progression with clinical accuracy.
                    </p>
                    
                    <div className="card-actions justify-center mt-6">
                      <Link to={"/Analyze"}>
                        <button className="btn btn-secondary btn-wide gap-2">
                          <FontAwesomeIcon icon={faMicroscope}/>
                          Analyze Wound
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Professional Solutions */}
              <div className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '600ms' }}>
                <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="card-body">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-accent/20 rounded-xl">
                        <FontAwesomeIcon icon={faClipboardCheck} />
                      </div>
                    </div>
                    
                    <h3 className="card-title text-2xl justify-center">Review Analysis</h3>
                    <p className="text-base-content/70">
                      Knowledge is key to a fast recovery. Access your detailed wound evaluation and step-by-step treatment guide right here.
                    </p>
                    
                    <div className="card-actions justify-center mt-6">
                      <Link to={"/Review"}>
                        <button className="btn btn-accent btn-wide gap-2">
                          <FontAwesomeIcon icon={faFileMedical}/>
                          Review Analysis
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className={`transition-all duration-700 border-t border-base-300 pt-12 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <h3 className="text-3xl font-bold text-center mb-8">Why Choose Our Platform?</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: 'fa-check-circle', title: 'Clinical Accuracy', desc: 'AI trained on thousands of wound cases' },
                  { icon: 'fa-bolt', title: 'Real-Time', desc: 'Instant analysis and recommendations' },
                  { icon: 'fa-lock', title: 'HIPAA Compliant', desc: 'Your data is secure and private' },
                  { icon: 'fa-users', title: '24/7 Support', desc: 'Professional guidance always available' }
                ].map((feature, index) => (
                  <div key={index} className="card bg-base-200 text-center p-6">
                    <div className="text-3xl mb-3 text-primary">
                      <i className={`fas ${feature.icon}`}></i>
                    </div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-base-content/70">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`bg-linear-to-r from-primary to-secondary py-16 px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-base-100 mb-4">Ready to Transform Your Wound Care?</h3>
            <p className="text-base-200 mb-8 text-lg">Join healthcare professionals and patients already benefiting from intelligent wound analysis.</p>
            <button className="btn btn-lg btn-outline text-base-100 border-base-100 hover:bg-base-100 hover:text-primary gap-2">
              <i className="fas fa-rocket"></i>
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;