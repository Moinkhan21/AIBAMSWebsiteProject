import "../Styles/Footer.css";
import Social from "../components/ui/social.jsx";
import { ChevronUp } from "lucide-react"; // Using Lucide icon for the arrow

function Footer({ heroRef }) {
  // Function to scroll to the Hero section when arrow is clicked
  const scrollToHero = () => {
    if (heroRef && heroRef.current) {
      heroRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.error("Hero section reference not found");
      // Fallback to scroll to top if reference not available
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white p-10 relative">
      
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8 justify-items-center">
        {/* PRODUCT */}
        <div>
          <h3 className="font-bold mb-2">PRODUCT</h3>
          <ul className="space-y-2 text-white">
            {[
              { name: "Design", link: "#" },
              { name: "Page building", link: "#" },
              { name: "Hosting", link: "#" },
              { name: "Security", link: "#" },
              { name: "Ecommerce", link: "#" },
              { name: "Analyze", link: "#" },
              { name: "Optimize", link: "#" },
              { name: "SEO", link: "#" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:!text-white cursor-pointer !text-gray-500"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOLUTIONS - First Column */}
        <div>
          <h3 className="font-bold mb-2">SOLUTIONS</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              { name: "Enterprise", link: "#" },
              { name: "Startups", link: "#" },
              { name: "Agencies", link: "#" },
              { name: "Freelancers", link: "#" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:!text-white cursor-pointer !text-gray-500"
                >
                  {item.name}
                </a>{" "}
              </li>
            ))}
          </ul>
        </div>
        
        {/* SOLUTIONS - Second Column */}
        <div>
          <h3 className="font-bold mb-2">SOLUTIONS</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              { name: "Enterprise", link: "#" },
              { name: "Startups", link: "#" },
              { name: "Agencies", link: "#" },
              { name: "Freelancers", link: "#" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:!text-white cursor-pointer !text-gray-500"
                >
                  {item.name}
                </a>{" "}
              </li>
            ))}
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-bold mb-2">RESOURCES</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              { name: "Blog", link: "#" },
              { name: "Customer stories", link: "#" },
              { name: "Apps", link: "#" },
              { name: "Libraries", link: "#" },
              { name: "Templates", link: "#" },
              { name: "Developers", link: "#" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:!text-white cursor-pointer !text-gray-500"
                >
                  {item.name}
                </a>{" "}
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-bold mb-2">COMPANY</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              { name: "About", link: "#" },
              { name: "Careers", link: "#" },
              { name: "Terms of Service", link: "/terms" },
              { name: "Privacy policy", link: "/policy" },
              { name: "Sitemap", link: "#" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:!text-white cursor-pointer !text-gray-500"
                >
                  {item.name}
                </a>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
       
      <div className="statement flex-col justify-between space-y-5 text-center mx-5 mt-10">
        <p className="text-center text-3xl font-bold tracking-wider">AIBAMS <span className="ignite">IGNITE</span></p>
        <p className="text-center font-light tracking-wide">
          Get ready to ignite your business journey with AIBAMS, where 
          innovation and efficiency converge.
        </p>
        <p className="text-center font-extralight tracking-wide">
          Our AI solutions will revolutionize how you <span className="font-semibold">manage</span>, <span className="font-semibold">operate</span>, and <span className="font-semibold">succeed</span>.
        </p>
        <p className="text-center font-semibold">Stay tuned for a new era in business excellence</p>
      </div>

      {/* Bottom section */}
      <div className="mt-10 text-center">
        <div className="mb-10">
          <Social />
        </div>
        <p className="text-gray-400 mb-5">
          © 2025 All Rights Reserved by AIBAMS.
        </p>

        <p className="text-gray-300 tracking-widest">
          MADE WITH <span className="text-red-500 text-xl">❤️</span> BY{" "}
          <span>SHDPIXEL</span>{" "}
          IN
          <span className="inline-block mx-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
              alt="India Flag"
              className="w-5 h-4 inline-block"
            />
          </span>
        </p>
      </div>

      {/* Scroll Arrow - positioned at the bottom right corner */}
      <div 
        className="scroll-to-hero-arrow fixed bottom-8 right-8 cursor-pointer z-10"
        onClick={scrollToHero}
        aria-label="Scroll to hero section"
      >
        <div className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition-colors">
          <ChevronUp size={24} color="black" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;