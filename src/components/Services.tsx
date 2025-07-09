import React from "react";
import { Globe, Code, Mail } from "lucide-react";

// Services component displays additional services offered by the company
const Services = () => {
  // List of service objects to display
  const services = [
    {
      icon: Globe,
      title: "Domain Services",
      description:
        "Complete domain management including registration, parking, and transfers with competitive pricing.",
    },
    {
      icon: Code,
      title: "Web Design & Development",
      description:
        "Responsive websites crafted by our certified developers with modern design and functionality.",
    },
    {
      icon: Mail,
      title: "Business Email & Google Workspace",
      description:
        "Professional email solutions and Google Workspace reseller support for your business needs.",
    },
  ];

  return (
    // Section for services
    <section id="services" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Complementary Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond hosting, we offer a complete suite of web services to help
            your business thrive online.
          </p>
        </div>

        {/* Display each service in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-gray-100 transition-colors text-center"
            >
              <div className="bg-blue-100 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <a
                href="tel:7778889683"
                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded font-medium text-sm hover:bg-blue-700 transition-colors"
              >
                Call Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
