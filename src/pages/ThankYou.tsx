import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";

// ThankYou page displays a confirmation after form submission
const ThankYou = () => {
  const navigate = useNavigate();

  // Scroll to hosting plans section after navigating home
  const scrollToHostingPlans = () => {
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("hosting-plans")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    // Main thank you section
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 text-center">
          {/* Success Icon and message */}
          <div className="mb-8">
            <div className="bg-green-100 rounded-full p-6 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Your message has been successfully submitted. We appreciate you
              reaching out to Excel Technologies.
            </p>
          </div>

          {/* Contact Information section */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Need Immediate Assistance?
            </h3>
            <div className="space-y-2 text-sm sm:text-base">
              <p className="text-gray-600">
                <strong>Email:</strong> sales@exceltechnologies.in
              </p>
              <p className="text-gray-600">
                <strong>Office:</strong> Rohini Sector-5, Delhi–110085
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link
              to="/"
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={scrollToHostingPlans}
              className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Hosting Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
