import React from 'react';
import '../Styles/CareersPage.css';

const jobListings = [
  { title: "Fullstack Developer Intern", location: "Vadodara, Gujarat" },
  { title: "Graphic Designer Intern", location: "Vadodara, Gujarat" },
  { title: "Digital Marketing Intern", location: "Vadodara, Gujarat" },
  { title: "Sales & Marketing Intern", location: "Vadodara, Gujarat" },
  { title: "Video Intern", location: "Vadodara, Gujarat" },
];

const CareersPage = () => {
  return (
    <div className="careers-page">
      {/* Hero Section */}
      <div className="mt-20 text-center">
        <h1 className="sm:text-xl md:text-xl lg:text-2xl font-semibold">Careers</h1>
        <p className="text-gray-300 sm:text-xl md:text-xl lg:text-2xl mt-3">
          Join Us In Shaping The Future With Groundbreaking Innovations
        </p>
      </div>

      {/* Available Positions */}
      <div className="mt-15 text-center w-[80%] ">
        {/* <h2 className="text-4xl font-bold tracking-wider">Available Positions</h2>
        <p className="text-gray-500 mt-5 mb-6">Explore our current job openings</p> */}

        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 ml-[20%] max-w-7xl">
          {jobListings.map((job, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 text-center align-center justify-center"
            >
              <h3 className="text-lg font-bold">{job.title}</h3>
              <p className="text-gray-500">{job.location}</p>
              <span className="inline-block mt-3 px-4 py-1 bg-yellow-500 text-black rounded-full">
                Available
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-20">
        {/* Job Application Form Section */}
        {/* <div className="h-30 w-1500 absolute bg-[#555555] ml-250 pt-180 mt-20 rounded-full"></div> */}
        <section className="job-application-section text-center">
          <h2 className="font-bold sm:text-xl md:text-xl lg:text-2xl">Job Application Form</h2>
          <p className="sm:text-xl md:text-xl lg:text-2xl text-center">Please Fill Out the Form Below to Submit Your Job Application!</p>

          <form className="job-application-form">
            <div className="form-group">
              <label>Name <span>*</span></label>
              <div className="name-fields flex flex-wrap justify-center gap-4">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
            </div>

            <div className="form-group">
              <label>Email <span>*</span></label>
              <input type="email" placeholder="ex: myname@example.com" required className="w-full text-center" />
            </div>

            <div className="form-group">
              <label>Phone Number <span>*</span></label>
              <input type="tel" placeholder="(+91) 00000-00000" required className="w-full text-center" />
            </div>

            <div className="form-group">
              <label>Applied Position</label>
              <input type="text" placeholder="Applied Position" className="w-full text-center" />
            </div>

            <div className="form-group">
              <label>Earliest Possible Start Date</label>
              <input type="date" className="w-full text-center" />
            </div>

            <div className="form-group">
              <label>Upload Resume <span>*</span></label>
              <div className="file-upload">
                <input type="file" required />
                <p>Upload a File</p>
                <span>Drag and drop files here</span>
              </div>
            </div>

            <button type="submit" className="bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] text-black justify-center">Apply</button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer>
        <p className="sm:text-xl md:text-xl lg:text-2xl mt-0 justify-center text-center">Ready to make an impact? Join us today!</p>
      </footer>
    </div>
  );
};

export default CareersPage;