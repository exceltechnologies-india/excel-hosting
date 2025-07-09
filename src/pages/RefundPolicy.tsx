import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RefundPolicy = () => {
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
              Cancellation & Refund Policy
            </h1>
            <p className="text-gray-600">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Excel Technologies, we strive to provide excellent hosting
                services and customer satisfaction. This Cancellation & Refund
                Policy outlines the terms and conditions for cancellations and
                refunds of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                30-Day Money-Back Guarantee
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer a 30-day money-back guarantee for all new hosting
                accounts. If you are not satisfied with our services within the
                first 30 days of your initial purchase, you may request a full
                refund.
              </p>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Conditions for Money-Back Guarantee:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Applies only to new hosting accounts</li>
                <li>Must be requested within 30 days of initial purchase</li>
                <li>Account must not have violated our Terms of Service</li>
                <li>
                  Refund applies to hosting fees only (domain registration fees
                  are non-refundable)
                </li>
                <li>Setup fees, if any, are non-refundable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Refund Eligibility
              </h2>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Eligible for Refund:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Hosting service fees within 30 days of purchase</li>
                <li>Unused portions of prepaid hosting services (pro-rated)</li>
                <li>
                  Services cancelled due to our inability to provide promised
                  features
                </li>
                <li>Duplicate payments made in error</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Not Eligible for Refund:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Domain registration and renewal fees</li>
                <li>SSL certificate fees</li>
                <li>Setup fees and migration charges</li>
                <li>Third-party software licenses</li>
                <li>Services used for more than 30 days</li>
                <li>Accounts suspended for Terms of Service violations</li>
                <li>Custom development work</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Cancellation Process
              </h2>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                How to Cancel:
              </h3>
              <ol className="list-decimal pl-6 text-gray-700 mb-4">
                <li>
                  Submit a cancellation request via email to
                  sales@exceltechnologies.in
                </li>
                <li>
                  Include your account details and reason for cancellation
                </li>
                <li>
                  Our support team will process your request within 24-48 hours
                </li>
                <li>
                  You will receive a confirmation email once cancellation is
                  processed
                </li>
              </ol>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Cancellation Timeline:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  Immediate cancellation: Service stops immediately, no refund
                  for unused time
                </li>
                <li>
                  End-of-term cancellation: Service continues until the end of
                  current billing period
                </li>
                <li>
                  We recommend cancelling at least 7 days before your renewal
                  date
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Refund Process
              </h2>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Refund Timeline:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Refund requests are processed within 5-7 business days</li>
                <li>
                  Approved refunds are credited back to the original payment
                  method
                </li>
                <li>Bank processing may take additional 3-5 business days</li>
                <li>
                  You will receive an email confirmation once refund is
                  processed
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Required Information for Refund:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Account username or email address</li>
                <li>Invoice number or transaction ID</li>
                <li>Reason for refund request</li>
                <li>Original payment method details</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Pro-Rated Refunds
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For annual or multi-year plans cancelled after the 30-day
                period, we may offer pro-rated refunds at our discretion,
                calculated from the date of cancellation request to the end of
                the current billing period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Chargebacks and Disputes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We encourage customers to contact us directly before initiating
                chargebacks or payment disputes. Chargebacks may result in
                immediate account suspension and additional fees. We will work
                with you to resolve any billing issues amicably.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Service Interruptions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In case of extended service interruptions due to our technical
                issues, we may provide service credits or partial refunds as
                compensation. The amount will be determined based on the
                duration and impact of the interruption.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Policy Changes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Excel Technologies reserves the right to modify this
                Cancellation & Refund Policy at any time. Changes will be
                effective immediately upon posting on our website. Continued use
                of our services constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For cancellation requests, refund inquiries, or questions about
                this policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Sales:</strong> sales@exceltechnologies.in
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong>Rohini Sector-5, Delhi–110085
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
