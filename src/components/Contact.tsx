import React, { useState } from "react";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  // Restore toggle state for forms
  const [activeForm, setActiveForm] = useState<"general" | "technical">(
    "general"
  );
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  // General Enquiry Submit
  const handleGeneralSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch(`${API_URL}/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("Message sent successfully! Redirecting...");
        setSubmitted(true);
        setTimeout(() => navigate("/thank-you"), 1500);
        form.reset();
      } else {
        setStatus(result.message || "Failed to send message.");
      }
    } catch {
      setStatus("Failed to send message.");
    }
    setLoading(false);
  };

  // Technical Support Submit
  const handleTechnicalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch(`${API_URL}/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("Message sent successfully! Redirecting...");
        setSubmitted(true);
        setTimeout(() => navigate("/thank-you"), 1500);
        form.reset();
      } else {
        setStatus(result.message || "Failed to send message.");
      }
    } catch {
      setStatus("Failed to send message.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contact & Support
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Have questions? Our team is here to help you
            24/7.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-5 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="mb-12 lg:mb-0 text-center lg:text-left lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6 max-w-md mx-auto lg:mx-0">
              <div className="flex items-start space-x-4 pb-5">
                <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">Email Support</h4>
                  <p className="text-gray-600">sales@exceltechnologies.in</p>
                  <p className="text-sm text-gray-500">
                    Response within 2 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pb-7">
                <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                  <PhoneCall className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">Phone Support</h4>
                  <p className="text-gray-600">+91-7778889683</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">
                    Office Address
                  </h4>
                  <p className="text-gray-600">
                    Rohini, Sector-5, Delhi – 110085
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Forms */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 max-w-3xl w-full lg:max-w-3xl lg:w-full lg:col-span-3">
            {/* Form Toggle */}
            <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveForm("general")}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md font-medium transition-colors text-sm sm:text-base ${
                  activeForm === "general"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                General Enquiry
              </button>
              <button
                onClick={() => setActiveForm("technical")}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md font-medium transition-colors text-sm sm:text-base ${
                  activeForm === "technical"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Technical Support
              </button>
            </div>
            {/* General Enquiry Form */}
            {activeForm === "general" && (
              <form onSubmit={handleGeneralSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="general-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="general-name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 text-sm"
                    disabled={loading || submitted}
                  />
                </div>
                <div>
                  <label
                    htmlFor="general-email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="general-email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 text-sm"
                    disabled={loading || submitted}
                  />
                </div>
                <div>
                  <label
                    htmlFor="general-phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="general-phone"
                    name="phone"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 text-sm"
                    disabled={loading || submitted}
                  />
                </div>
                <div>
                  <label
                    htmlFor="general-message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="general-message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 text-sm"
                    disabled={loading || submitted}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                  disabled={loading || submitted}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {status && (
                  <div className="mt-2 text-center text-sm text-blue-700">
                    {status}
                  </div>
                )}
              </form>
            )}
            {/* Technical Support Form */}
            {activeForm === "technical" && (
              <form onSubmit={handleTechnicalSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="tech-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="tech-name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 text-sm"
                    disabled={loading || submitted}
                  />
                </div>
                <div>
                  <label
                    htmlFor="tech-email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="tech-email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 text-sm"
                    disabled={loading || submitted}
                  />
                </div>
                <div>
                  <label
                    htmlFor="tech-domain"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Domain/Website URL *
                  </label>
                  <input
                    type="text"
                    id="tech-domain"
                    name="domain"
                    required
                    placeholder="e.g., example.com"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 text-sm"
                    disabled={loading || submitted}
                  />
                </div>
                <div>
                  <label
                    htmlFor="tech-issue-type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Issue Type *
                  </label>
                  <select
                    id="tech-issue-type"
                    name="issueType"
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 text-sm"
                    disabled={loading || submitted}
                  >
                    <option value="">Select an issue type</option>
                    <option value="website-down">Website Down</option>
                    <option value="email-issues">Email Issues</option>
                    <option value="performance">Performance Issues</option>
                    <option value="ssl-certificate">SSL Certificate</option>
                    <option value="database">Database Issues</option>
                    <option value="domain">Domain Issues</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="tech-description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Issue Description *
                  </label>
                  <textarea
                    id="tech-description"
                    name="description"
                    required
                    rows={4}
                    placeholder="Please describe the issue in detail, including any error messages..."
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 text-sm"
                    disabled={loading || submitted}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                  disabled={loading || submitted}
                >
                  {loading ? "Sending..." : "Submit Technical Request"}
                </button>
                {status && (
                  <div className="mt-2 text-center text-sm text-blue-700">
                    {status}
                  </div>
                )}
              </form>
            )}
            {/* End of forms */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
