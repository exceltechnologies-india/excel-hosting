import React from "react";
import { Cloud, Server, CheckCircle } from "lucide-react";

// Hero component displays the main landing section with key highlights and CTAs
const Hero = () => {
  // Scroll to the hosting plans section
  const scrollToHostingPlans = () => {
    document
      .getElementById("hosting-plans")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to the contact section
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // Main hero section
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-white py-12 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content: Headline, description, features, CTAs */}
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
              Reliable, Affordable Google Cloud Shared Hosting by{" "}
              <span className="text-blue-600">Excel Technologies</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Powerful Google Cloud Shared Hosting with PHP 8.2 & MySQL 8.0,
              email & domain services—as a Google Authorized Partner, all backed
              by 16+ years of expertise.
            </p>

            {/* Key Features List */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">99.99% Uptime</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">PHP 8.2 & MySQL 8.0</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">
                  Free Zoho Exclusive Emails
                </span>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToHostingPlans}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                View Plans
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Illustration: Cloud and server icons */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 shadow-2xl">
                <div className="flex justify-center mb-6">
                  <Cloud className="h-20 sm:h-24 w-20 sm:w-24 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-white text-xl font-bold mb-2">
                    Cloud Infrastructure
                  </h3>
                  <p className="text-blue-100">Powered by Excel Technologies</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-4 shadow-lg">
                <Server className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
