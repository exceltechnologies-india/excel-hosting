import { Check, Star } from "lucide-react";

// HostingPlans component displays available hosting plans and their features
const HostingPlans = () => {
  // List of hosting plan objects
  const plans = [
    {
      name: "Starter",
      prevprice: "₹125.00",
      price: "₹49.99",
      period: "/monthly",
      popular: false,
      storage: "1 GB",
      cpu: "4 Cores",
      ram: "6GB Memory",
      bandwidth: "Unmetered",
      paymentLink: "https://rzp.io/rzp/cloud-starter",
      features: [
        "PHP 8.2 & MySQL 8.0",
        "Host 1 Website",
        "24/7 Phone & Email Support",
        "99.99% Uptime Guarantee",
        "SSL Certificate Included",
        "Run On-Demand Backup",
        "Upto 2 Zoho Email-id Free",
      ],
    },
    {
      name: "Standard",
      prevprice: "₹250",
      price: "₹125",
      period: "/monthly",
      popular: true,
      storage: "5 GB",
      cpu: "4 Cores",
      ram: "6GB Memory",
      bandwidth: "Unmetered",
      paymentLink: "https://rzp.io/rzp/cloud-standard",
      features: [
        "PHP 8.2 & MySQL 8.0",
        "Host Multiple Websites",
        "24/7 Phone & Email Support",
        "99.99% Uptime Guarantee",
        "SSL Certificate Included",
        "Run On-Demand Backup",
        "Website Migration",
        "Upto 3 Zoho Email-id Free",
      ],
    },
    {
      name: "Plus",
      prevprice: "₹416.66",
      price: "₹187.20",
      period: "/monthly",
      popular: false,
      storage: "10 GB",
      cpu: "4 Cores",
      ram: "6GB Memory",
      bandwidth: "Unmetered",
      paymentLink: "https://rzp.io/rzp/cloud-plus",
      features: [
        "PHP 8.2 & MySQL 8.0",
        "Host Multiple Websites",
        "24/7 Phone & Email Support",
        "99.99% Uptime Guarantee",
        "SSL Certificate Included",
        "Run On-Demand Backup",
        "Website Migration",
        "Priority Support",
        "Advanced Security Features",
        "Upto 5 Zoho Email-id Free",
      ],
    },
  ];

  // Handle order button click for a plan
  const handleOrderClick = (plan: (typeof plans)[0]) => {
    if (plan.paymentLink) {
      window.open(plan.paymentLink, "_blank");
    } else {
      // For plans without payment links, scroll to contact section
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Section for hosting plans
    <section id="hosting-plans" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Hosting Plan
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Google Cloud Shared Hosting with all prices including taxes. All
            plans come with PHP 8.1, 8.2 & MySQL 8.0 support.
          </p>
        </div>

        {/* Display each plan in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow mx-auto w-full max-w-sm ${
                plan.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  {/* Discount row */}
                  <div className="flex items-center justify-center mb-2 space-x-3">
                    <span className="text-lg font-medium text-gray-400 line-through">
                      {plan.prevprice}
                    </span>
                    {/* Calculate and show discount percentage */}
                    {(() => {
                      const prev = parseFloat(
                        plan.prevprice.replace(/[^\d.]/g, "")
                      );
                      const curr = parseFloat(
                        plan.price.replace(/[^\d.]/g, "")
                      );
                      const percent =
                        prev && curr
                          ? Math.round(((prev - curr) / prev) * 100)
                          : 0;
                      return (
                        <span className="bg-blue-100 text-blue-600 font-bold rounded-full px-4 py-1 text-sm">
                          SAVE {percent}%
                        </span>
                      );
                    })()}
                  </div>
                  {/* Main price row */}
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-3xl font-bold text-green-600">
                      {plan.price}
                    </span>
                    <span className="text-base text-gray-500 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    (including all taxes)
                  </p>
                  <p className="text-blue-600 mt-2 text-sm">Billed Annually</p>
                </div>

                {/* Plan details: storage, domains, bandwidth */}
                <div className="space-y-4 mb-6 sm:mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Storage:</span>
                    <span className="font-medium">{plan.storage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CPU:</span>
                    <span className="font-medium">{plan.cpu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">RAM:</span>
                    <span className="font-medium">{plan.ram}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bandwidth:</span>
                    <span className="font-medium">{plan.bandwidth}</span>
                  </div>
                </div>

                {/* Plan features list */}
                <div className="space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Order/Contact button */}
                <button
                  onClick={() => handleOrderClick(plan)}
                  className={`w-full py-3 sm:py-4 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.paymentLink ? "Order Now" : "Contact Us"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;
