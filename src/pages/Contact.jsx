import React, { useState, useEffect } from "react";
import "../Styles/ContactPage.css";
import { Phone, ChevronDown, Headphones } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Add noise texture component
const NoiseTexture = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" style={{ filter: 'contrast(170%) brightness(1000%)' }}>
    <filter id='noiseFilter'>
      <feTurbulence 
        type='fractalNoise' 
        baseFrequency='0.8' 
        numOctaves='4' 
        stitchTiles='stitch'
      />
    </filter>
    <rect width='100%' height='100%' filter='url(#noiseFilter)' />
  </svg>
);

const AiBAMSContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "Use it in my company",
    companySize: "",
    question: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add actual form submission logic here
  };

  return (
    <>
      <div className="aibams-main">
        <div className="contact-container">
          <div 
            className="contact-form-section p-5 isolate aspect-video w-96 rounded-xl bg-[#ffffff0c] shadow-lg ring-1 ring-black/5 relative "
            data-aos="fade-up"
          >
            <NoiseTexture />
            <h2 className="section-title relative z-10">Looking for something?</h2>

            <form onSubmit={handleSubmit} className="contact-form relative z-10">
              <div className="form-row" data-aos="fade-up" data-aos-delay="100">
                <div className="form-group">
                  <label htmlFor="name">
                    Name <span className="required !text-[#fad643]"> </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row" data-aos="fade-up" data-aos-delay="200">
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required !text-[#002aff]"> </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                <label htmlFor="subject">
                  Subject <span className="required !text-[#002aff]"> </span>
                </label>
                <div className="select-wrapper">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="Use it in my company">
                      Use it in my company
                    </option>
                    <option value="Technical inquiry">Technical inquiry</option>
                    <option value="Pricing information">
                      Pricing information
                    </option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className="select-icon" size={20} />
                </div>
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                <label htmlFor="companySize">
                  Your company size <span className="required !text-[#002aff]"> </span>
                </label>
                <input
                  type="text"
                  id="companySize"
                  name="companySize"
                  placeholder="Enter company size"
                  value={formData.companySize}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="100">
                <label htmlFor="question">
                  Question <span className="required !text-[#002aff] "> </span>
                </label>
                <textarea
                  id="question"
                  name="question"
                  placeholder="Write your message here..."
                  value={formData.question}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              <div className="mt-1">
              <button className="bg-black text-[#fad643] font-bold py-[12px] px-6 rounded-full transition-all duration-200 ease-out hover:border-1 hover:border-white">
                Book a Demo
              </button>
            </div>
            </form>
          </div>

          <div 
            className="direct-contacts-section mt-8"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <h2 className="contacts-title">Direct Contacts</h2>
            <p className="contacts-subtitle">
              Call or schedule a video conference
            </p>

            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <a href="tel:+9100000000000" className="contact-link">
                +91 00000 00000
              </a>
            </div>

            <div className="contact-item">
              <a href="#" className="whatsapp-link">
                WhatsApp Link
              </a>
            </div>

            <div className="contact-options">
              <div className="option-item">
                <div className="option-icon calendar-icon">📅</div>
                <div className="option-text">
                  To assess your project & get a tailored demo
                </div>
              </div>

              <div className="option-item">
                <div className="option-icon calendar-icon">📅</div>
                <div className="option-text">
                  Appointment with a partner manager
                </div>
              </div>

              <div className="option-item">
                <div className="option-icon calendar-icon">📅</div>
                <div className="option-text">
                  Need to get in touch with developers?
                </div>
              </div>

              <div className="option-item">
                <div className="option-icon">
                  <Headphones size={18} />
                </div>
                <div className="option-text">Need help? A question?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="office-locations flex justify-center gap-70 bg-black h-100 items-center">
        <div 
          className="flex flex-col justify-center items-center py-8 px-6 border border-gray-800 rounded-md"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="mb-4 absolute -mt-30 bg-[#000000]">
            <svg
              width="60"
              height="60"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4C16.27 4 10 10.27 10 18C10 28.5 24 44 24 44C24 44 38 28.5 38 18C38 10.27 31.73 4 24 4ZM24 23C21.24 23 19 20.76 19 18C19 15.24 21.24 13 24 13C26.76 13 29 15.24 29 18C29 20.76 26.76 23 24 23Z"
                fill="#4D55CC"
              />
            </svg>
          </div>
          <h2 className="text-white text-2xl font-medium mb-3">Vadodara</h2>
        </div>
        
        <div 
          className="flex flex-col justify-center items-center py-8 px-6 border border-gray-800 rounded-md"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="mb-4 absolute -mt-30 bg-[#000000]">
            <svg
              width="60"
              height="60"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4C16.27 4 10 10.27 10 18C10 28.5 24 44 24 44C24 44 38 28.5 38 18C38 10.27 31.73 4 24 4ZM24 23C21.24 23 19 20.76 19 18C19 15.24 21.24 13 24 13C26.76 13 29 15.24 29 18C29 20.76 26.76 23 24 23Z"
                fill="#4D55CC"
              />
            </svg>
          </div>
          <h2 className="text-white text-2xl font-medium mb-3">Mumbai</h2>
        </div>
      </div>
    </>
  );
};

export default AiBAMSContactPage;