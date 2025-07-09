import { Check, X } from "lucide-react";

const ZohoComparison = () => {
  const comparisons = [
    {
      feature: "Professional-grade Email",
      zoho: {
        title: "Professional-grade Email",
        description:
          "Zoho offers a business-class experience that's ideal for startups, professionals, and enterprises.",
        hasFeature: true,
      },
      webmail: {
        title: "Basic & Outdated Email",
        description:
          "Webmail offer a clunky, outdated interface that lacks modern usability, making daily email tasks frustrating.",
        hasFeature: false,
      },
    },
    {
      feature: "Independence from Web Hosting",
      zoho: {
        title: "Independent from Web Hosting",
        description:
          "Your emails remain safe and fully functional even if your hosting server faces downtime or changes.",
        hasFeature: true,
      },
      webmail: {
        title: "Tied to Hosting Server",
        description:
          "Web hosting experiences downtime or server issues, your emails may become inaccessible — or worse, get lost entirely.",
        hasFeature: false,
      },
    },
    {
      feature: "Email Deliverability",
      zoho: {
        title: "Better Deliverability",
        description:
          "Zoho's email servers are trusted by ISPs, reducing the chance of your messages landing in spam.",
        hasFeature: true,
      },
      webmail: {
        title: "Poor Deliverability",
        description:
          "Emails sent through shared hosting, Webmail often end up in spam due to lower IP reputation & lack of advanced authentication.",
        hasFeature: false,
      },
    },
    {
      feature: "Security & Privacy",
      zoho: {
        title: "Security & Privacy",
        description:
          "Advanced encryption, spam protection, and zero ad policy ensure your data stays secure.",
        hasFeature: true,
      },
      webmail: {
        title: "Limited Security Features",
        description:
          "Webmail typically lacks enterprise-grade protection. Spam filters are basic, and there's minimal defense against phishing or spoofing.",
        hasFeature: false,
      },
    },
    {
      feature: "User Experience",
      zoho: {
        title: "Ease of Use",
        description:
          "A smooth, modern interface that works across browsers, mobile devices, and desktops without technical headaches.",
        hasFeature: true,
      },
      webmail: {
        title: "No Mobile or App Integration",
        description:
          "Webmail doesn't have dedicated mobile apps or seamless desktop integration, limiting accessibility & convenience.",
        hasFeature: false,
      },
    },
  ];

  const scrollToHostingPlans = () => {
    document
      .getElementById("hosting-plans")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Zoho Mail vs Webmail
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Excel Technologies, we prioritize performance, security,
            reliability, and user experience. That's why we've chosen to provide
            Zoho Mail as our exclusive email solution. Here's why:
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center">
              <div className="bg-green-50 rounded-2xl p-4 sm:p-6 border border-green-200">
                <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-2">
                  Zoho Mail
                </h3>
                <p className="text-green-600 text-sm sm:text-base">
                  Professional Email Solution
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-red-50 rounded-2xl p-4 sm:p-6 border border-red-200">
                <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-2">
                  Webmail
                </h3>
                <p className="text-red-600 text-sm sm:text-base">
                  Basic Email Solution
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Items */}
          <div className="space-y-6 sm:space-y-8">
            {comparisons.map((comparison, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
              >
                {/* Zoho Mail Side */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                        {comparison.zoho.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {comparison.zoho.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Webmail Side */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 rounded-full p-2 flex-shrink-0 mt-1">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                        {comparison.webmail.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {comparison.webmail.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto text-white shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Ready to Upgrade Your Email Experience?
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Get professional Zoho Mail with all our hosting plans.
                Experience the difference of enterprise-grade email.
              </p>
              <button
                onClick={scrollToHostingPlans}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                View Hosting Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZohoComparison;
