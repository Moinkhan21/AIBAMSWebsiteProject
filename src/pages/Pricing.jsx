import { useState, useEffect } from "react";
import "../Styles/PricingPage.css"; // Assumed CSS file for additional styling
import Pricingcta from "../components/ui/Pricingcta.jsx"; // Assumed component
import ButtonHero from "../components/Button.jsx"; // Assumed component
import AOS from "aos";
import "aos/dist/aos.css";

// CustomButton Component (from your previous snippet)

const CustomButton = ({ text = "Subscribe", onClick, className = "" }) => {
  return (
    <button
      className={`relative px-6 py-3 bg-black rounded-md font-semibold 
             transform transition-transform duration-500 
             hover:scale-105 hover:shadow-lg 
               group ${className}`}
      onClick={onClick}
    >
      <span className="flex items-center space-x-2">
        <span>{text}</span>
        <svg
          className="w-6 h-6 transition-transform duration-500 hover:translate-x-1 "
          aria-hidden="true"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            fillRule="evenodd"
            fill="currentColor"
          />
        </svg>
      </span>
      {/* <span
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                   bg-gradient-to-r from-yellow-500/20 to-yellow-500/20"
      ></span> */}
    </button>
  );
};

// Noise Texture Component
const NoiseTexture = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
    style={{ filter: "contrast(170%) brightness(1000%)" }}
  >
    <filter id="noiseFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.8"
        numOctaves="4"
        stitchTiles="stitch"
      />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

// Pricing Component
const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const pricingPlans = [
    {
      name: "Starter",
      price: { monthly: 12, yearly: 9 },
      members: 500,
      staffUsers: 1,
      newsletters: 1,
      premiumTiers: 1,
      transactionFees: "0%",
      fileUploads: "5mb",
      customDomain: true,
      sendingDomain: false,
      customThemes: false,
      customIntegrations: false,
      customSSL: false,
      customSubdirectory: false,
      productHelp: "Email support",
      conciergeMigration: false,
      uptimeSLA: false,
    },
    {
      name: "Creator",
      price: { monthly: 30, yearly: 25 },
      members: 1000,
      staffUsers: 2,
      newsletters: 3,
      premiumTiers: 5,
      transactionFees: "0%",
      fileUploads: "100mb",
      customDomain: true,
      sendingDomain: true,
      customThemes: true,
      customIntegrations: true,
      customSSL: false,
      customSubdirectory: false,
      productHelp: "Email support",
      conciergeMigration: "Simple migrations",
      uptimeSLA: false,
    },
    {
      name: "Team",
      price: { monthly: 55, yearly: 50 },
      members: 1000,
      staffUsers: 5,
      newsletters: 10,
      premiumTiers: "Unlimited",
      transactionFees: "0%",
      fileUploads: "250mb",
      customDomain: true,
      sendingDomain: true,
      customThemes: true,
      customIntegrations: true,
      customSSL: "+ $20/mo",
      customSubdirectory: false,
      productHelp: "Priority support",
      conciergeMigration: "Advanced migrations",
      uptimeSLA: false,
    },
    {
      name: "Business",
      price: { monthly: 220, yearly: 199 },
      members: 10000,
      staffUsers: "Unlimited",
      newsletters: "Unlimited",
      premiumTiers: "Unlimited",
      transactionFees: "0%",
      fileUploads: "1gb",
      customDomain: true,
      sendingDomain: true,
      customThemes: true,
      customIntegrations: true,
      customSSL: true,
      customSubdirectory: "+ $50/mo",
      productHelp: "Account manager",
      conciergeMigration: "Business migrations",
      uptimeSLA: "99.9% uptime SLA",
    },
  ];

  const platformFeatures = [
    "Fully managed service",
    "Automatic weekly updates",
    "Worldwide CDN",
    "Enterprise-grade security",
    "Threat & uptime management",
    "Free SSL certificate",
  ];

  return (
    <div className="pricing-container">
      <div className="max-w-6xl mx-auto -my-15 text-center">
        <h1 className="sm:text-xl md:text-xl lg:text-2xl font-semibold" data-aos="fade-up">
          Launch your creative business.
        </h1>
        <h3
          className="sm:text-xl md:text-xl lg:text-2xl text-white mt-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Publishing, newsletters, members, payments — all in one place.
        </h3>
        <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-wrap justify-center mt-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
            <CustomButton
              text="Monthly billing"
              onClick={() => setBillingCycle("monthly")}
              className={`${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] text-black"
                  : "hover:scale-105 duration-300"
              }`}
            />
            <CustomButton
              text="Yearly billing"
              onClick={() => setBillingCycle("yearly")}
              className={`${
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] text-black"
                  : "hover:scale-105 duration-300"
              }`}
            />
          </div>
        </div>

        <div
          className="grid grid-wrap sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-20"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="!border-0 rounded-lg p-3 shadow-md text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden bg-white"
              data-aos="zoom-in"
              data-aos-delay={pricingPlans.indexOf(plan) * 100}
            >
              <NoiseTexture />
              <h3 className="text-xl ml-5 font-bold relative z-10">
                {plan.name}
              </h3>
              <p className="text-gray-500 ml-5 relative z-10">
                {plan.members} Members
              </p>
              <p className="text-3xl font-bold mt-4 ml-5 relative z-10">
                ${plan.price[billingCycle]}{" "}
                <span className="text-gray-500 text-lg">/ mo</span>
              </p>
              <div className="mt-2 items-center ml-5">
                <ButtonHero size="small"></ButtonHero>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 overflow-x-auto rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <table className="w-full text-left bg-gray-700 rounded-2xl">
            <thead>
              <tr>
                <th className="p-4 w-1/5">Product</th>
                {pricingPlans.map((plan) => (
                  <th key={plan.name} className="p-4 w-1/5 text-center">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                "members",
                "staffUsers",
                "newsletters",
                "premiumTiers",
                "transactionFees",
                "fileUploads",
                "customDomain",
                "sendingDomain",
                "customThemes",
                "customIntegrations",
              ].map((feature) => (
                <tr
                  key={feature}
                  className="hover:bg-[#faf1439a] transition-colors duration-150"
                >
                  <td className="p-4 capitalize">
                    {feature.replace(/([A-Z])/g, " $1")}
                  </td>
                  {pricingPlans.map((plan) => (
                    <td key={plan.name} className="p-4 text-center">
                      {typeof plan[feature] === "boolean"
                        ? plan[feature]
                          ? "✓"
                          : "✕"
                        : plan[feature]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12" data-aos="fade-up" data-aos-delay="500">
          <h2 className="text-2xl font-bold text-left mb-4">Platform</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-extralight border-collapse table-fixed">
              <tbody>
                {platformFeatures.map((feature) => (
                  <tr
                    key={feature}
                    className="hover:bg-[#faf1439a] transition-colors duration-150"
                  >
                    <td className="p-4 font-extralight w-1/5">{feature}</td>
                    {pricingPlans.map((plan) => (
                      <td
                        key={plan.name}
                        className="p-4 font-extralight w-1/5 text-center"
                      >
                        <span className="text-pink-500">✓</span>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="hover:bg-[#faf1439a] transition-colors duration-150">
                  <td className="p-4">Custom SSL certificate</td>
                  {pricingPlans.map((plan) => (
                    <td
                      key={plan.name}
                      className="p-4 font-extralight text-center"
                    >
                      {typeof plan.customSSL === "boolean" ? (
                        plan.customSSL ? (
                          <span className="text-pink-500">✓</span>
                        ) : (
                          "✕"
                        )
                      ) : (
                        plan.customSSL
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#faf1439a] transition-colors duration-150">
                  <td className="p-4">Custom subdirectory install</td>
                  {pricingPlans.map((plan) => (
                    <td
                      key={plan.name}
                      className="p-4 font-extralight text-center"
                    >
                      {typeof plan.customSubdirectory === "boolean" ? (
                        plan.customSubdirectory ? (
                          <span className="text-pink-500">✓</span>
                        ) : (
                          "✕"
                        )
                      ) : (
                        plan.customSubdirectory
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up" data-aos-delay="600">
          <h2 className="text-2xl font-bold text-left mb-4">Support</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse table-fixed">
              <tbody>
                <tr className="hover:bg-[#faf1439a] transition-colors duration-150">
                  <td className="p-4 w-1/5">Product help</td>
                  {pricingPlans.map((plan) => (
                    <td
                      key={plan.name}
                      className="p-4 font-extralight w-1/5 text-center"
                    >
                      {plan.productHelp}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#faf1439a] transition-colors duration-150">
                  <td className="p-4">Concierge migration</td>
                  {pricingPlans.map((plan) => (
                    <td
                      key={plan.name}
                      className="p-4 font-extralight text-center"
                    >
                      {typeof plan.conciergeMigration === "boolean" ? (
                        plan.conciergeMigration ? (
                          <span className="text-pink-500">✓</span>
                        ) : (
                          "✕"
                        )
                      ) : (
                        plan.conciergeMigration
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#faf1439a] transition-colors duration-150">
                  <td className="p-4">Uptime SLA</td>
                  {pricingPlans.map((plan) => (
                    <td
                      key={plan.name}
                      className="p-4 font-extralight text-center"
                    >
                      {typeof plan.uptimeSLA === "boolean" ? (
                        plan.uptimeSLA ? (
                          <span className="text-pink-500">✓</span>
                        ) : (
                          "✕"
                        )
                      ) : (
                        plan.uptimeSLA
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Pricingcta data-aos="fade-up" data-aos-delay="700" />
      </div>
    </div>
  );
};

export default Pricing;
