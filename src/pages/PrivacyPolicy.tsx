import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// PrivacyPolicy page displays the company's privacy policy
const PrivacyPolicy = () => {
  return (
    // Main privacy policy section
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
          {/* Header with back link and title */}
          <div className="mb-8 text-center sm:text-left">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">Last updated: January 2025</p>
          </div>

          {/* Policy Content Sections */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Excel Technologies ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Information We Collect
              </h2>
              {/* Personal Information */}
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Register for an account</li>
                <li>Purchase hosting services</li>
                <li>Contact us for support</li>
                <li>Subscribe to our newsletter</li>
                <li>Fill out forms on our website</li>
              </ul>
              {/* Technical Information */}
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Technical Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We automatically collect certain information when you visit our
                website, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and billing</li>
                <li>Communicating with you about your account</li>
                <li>Providing customer support</li>
                <li>Improving our website and services</li>
                <li>Sending promotional communications (with your consent)</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            {/* Information Sharing and Disclosure */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties except in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With your explicit consent</li>
                <li>
                  To trusted service providers who assist us in operating our
                  business
                </li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet is 100%
                secure.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this Privacy
                Policy, unless a longer retention period is required or
                permitted by law.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Right to access your personal information</li>
                <li>Right to rectify inaccurate information</li>
                <li>Right to erase your personal information</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </section>

            {/* Cookies and Tracking Technologies */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your
                experience on our website. You can control cookie settings
                through your browser preferences.
              </p>
            </section>

            {/* Third-Party Links */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Third-Party Links
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of these external
                sites and encourage you to review their privacy policies.
              </p>
            </section>

            {/* Changes to This Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>
            </section>

            {/* Contact Us Section */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> sales@exceltechnologies.in
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> Rohini Sector-5, Delhi–110085
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
