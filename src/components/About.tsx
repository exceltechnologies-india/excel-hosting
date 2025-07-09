import React from "react";
import { Award, Users, Calendar } from "lucide-react";

// About component displays company background and stats
const About = () => {
  // Company statistics to display
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Happy Clients",
    },
    {
      icon: Award,
      number: "240+",
      label: "Websites Delivered",
    },
    {
      icon: Calendar,
      number: "16+",
      label: "Years Experience",
    },
  ];

  return (
    // Section for About content
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Textual company info and stats */}
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About Excel Technologies
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Founded in 2006 by Deepak Sharma, Excel Technologies has been at
              the forefront of web hosting and digital solutions for over 16
              years. Our Google-certified team brings expertise in Azure and GCP
              deployment, ensuring your projects are handled with the highest
              level of professionalism.
            </p>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We specialize in delivering reliable hosting solutions backed by
              cloud infrastructure, modern technology stacks, and unwavering
              customer support. Our commitment to excellence has made us a
              trusted partner for businesses across India.
            </p>

            {/* Display company stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-md mx-auto lg:max-w-none">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Expertise section */}
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-md w-full">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">
                  Our Expertise
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span>Google-certified professionals</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span>Azure & GCP deployment skills</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span>16+ years of industry experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span>Responsive web design & development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span>24/7 technical support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
