import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 text-center sm:text-left">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-600">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using the services provided by Excel
                Technologies ("Company," "we," "us," or "our"), you accept and
                agree to be bound by the terms and provision of this agreement.
                If you do not agree to abide by the above, please do not use
                this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                2. Service Description
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Excel Technologies provides web hosting, domain registration,
                email services, and related web services. Our services are
                subject to the terms and conditions outlined in this agreement.
              </p>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Services Include:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Web hosting (shared, VPS, dedicated)</li>
                <li>Domain registration and management</li>
                <li>Email hosting and management</li>
                <li>SSL certificates</li>
                <li>Website development and design</li>
                <li>Technical support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                3. Account Registration and Security
              </h2>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Account Information:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  You must provide accurate and complete information during
                  registration
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account credentials
                </li>
                <li>
                  You must notify us immediately of any unauthorized use of your
                  account
                </li>
                <li>
                  You are responsible for all activities that occur under your
                  account
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Age Requirement:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You must be at least 18 years old to use our services. By using
                our services, you represent that you are at least 18 years old.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                4. Acceptable Use Policy
              </h2>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Prohibited Activities:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Illegal activities or content that violates any laws</li>
                <li>Spam, unsolicited email, or bulk email distribution</li>
                <li>Malware, viruses, or malicious code</li>
                <li>Hacking, phishing, or unauthorized access attempts</li>
                <li>
                  Adult content, pornography, or sexually explicit material
                </li>
                <li>Hate speech, harassment, or discriminatory content</li>
                <li>
                  Copyright infringement or intellectual property violations
                </li>
                <li>Resource abuse or excessive server usage</li>
                <li>
                  Cryptocurrency mining or similar resource-intensive activities
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Content Responsibility:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are solely responsible for all content uploaded, posted, or
                transmitted through your account. We reserve the right to remove
                any content that violates this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                5. Payment Terms
              </h2>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Billing and Payment:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  All fees are due in advance and are non-refundable except as
                  stated in our Refund Policy
                </li>
                <li>
                  Services will be suspended if payment is not received by the
                  due date
                </li>
                <li>
                  We reserve the right to change our pricing with 30 days notice
                </li>
                <li>
                  All prices are in Indian Rupees (INR) and include applicable
                  taxes
                </li>
                <li>
                  Automatic renewal applies unless cancelled before the renewal
                  date
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Late Payment:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Accounts with overdue payments may be suspended without notice.
                A late fee may be applied to overdue accounts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                6. Service Level Agreement
              </h2>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Uptime Guarantee:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to maintain 99.9% uptime for our hosting services.
                Scheduled maintenance and circumstances beyond our control are
                excluded from this guarantee.
              </p>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Support:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Technical support is available 24/7 via email and phone</li>
                <li>
                  Response times may vary based on the complexity of the issue
                </li>
                <li>Support is provided in English and Hindi</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                7. Data Backup and Security
              </h2>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Backup Policy:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>We perform regular backups of server data</li>
                <li>Backups are for disaster recovery purposes only</li>
                <li>You are responsible for maintaining your own backups</li>
                <li>
                  We do not guarantee the availability or completeness of
                  backups
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Data Security:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement reasonable security measures to protect your data.
                However, no system is completely secure, and you acknowledge the
                inherent risks of internet-based services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Excel Technologies shall not be liable for any direct, indirect,
                incidental, special, or consequential damages resulting from the
                use or inability to use our services. Our total liability shall
                not exceed the amount paid for the service in the preceding 12
                months.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                9. Termination
              </h2>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Termination by Customer:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may terminate your account at any time by providing written
                notice. Termination does not relieve you of payment obligations
                for services already provided.
              </p>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Termination by Company:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account immediately for
                violation of these terms, non-payment, or any other reason at
                our sole discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                10. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, trademarks, and intellectual property on our
                website and services remain the property of Excel Technologies
                or their respective owners. You may not use our intellectual
                property without written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                11. Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Please review our Privacy
                Policy, which also governs your use of our services, to
                understand our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                12. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These terms shall be governed by and construed in accordance
                with the laws of India. Any disputes shall be subject to the
                exclusive jurisdiction of the courts in Delhi, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting on our website. Your
                continued use of our services constitutes acceptance of the
                modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                14. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions,
                please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Company:</strong> Excel Technologies
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> sales@exceltechnologies.in
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> Rohini Sector-5, Delhi–110085
                </p>
                {/* <p className="text-gray-700"><strong>Phone:</strong> +91-777 888 9674</p> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
