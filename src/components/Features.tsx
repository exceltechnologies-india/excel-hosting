import { Shield, Zap, Gift, HeadphonesIcon } from "lucide-react";

// Features component displays key selling points of the hosting service
const Features = () => {
  // List of feature objects to display
  const features = [
    {
      icon: Shield,
      title: "99.99% Uptime",
      description:
        "Reliable cloud-based hosting with enterprise-grade infrastructure ensuring your website stays online.",
    },
    {
      icon: Zap,
      title: "Latest PHP & MySQL Support",
      description:
        "Cutting-edge technology stack for optimal performance and security with the newest PHP and MySQL versions.",
    },
    {
      icon: Gift,
      title: "Free Zoho Exclusive Emails",
      description:
        "Professional business email accounts included at no extra cost with every hosting plan.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Expert Support",
      description:
        "Round-the-clock support via phone & email from our Google-certified team with 16+ years of experience.",
    },
  ];

  return (
    // Section for features
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Excel Technologies?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by 2,500+ clients with 240+ websites delivered. Experience
            the difference of professional hosting.
          </p>
        </div>

        {/* Display each feature in a grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-100 rounded-2xl p-6 mb-6 group-hover:bg-blue-200 transition-colors mx-auto w-fit">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 px-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed px-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
