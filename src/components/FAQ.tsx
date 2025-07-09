import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// FAQ component displays frequently asked questions and answers
const FAQ = () => {
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // List of FAQ objects
  const faqs = [
    {
      question: "What is a domain name?",
      answer: (
        <>
          <p>
            A domain name is your website’s unique address on the internet,
            making it easy for people to find and visit you online.
          </p>
          <p>
            It acts as your digital identity, representing your brand, business,
            or personal presence on the web.
          </p>
        </>
      ),
    },
    {
      question: "What can I do with a domain name?",
      answer: (
        <>
          <p>
            With a domain name, you can build a website, create branded email
            addresses, set up an online store, or forward it to an existing
            page.
          </p>
          <p>
            Your domain gives you full flexibility to develop your online
            presence exactly the way you want.
          </p>
        </>
      ),
    },
    {
      question: "How many domains can I host at Excel Technologies?",
      answer: (
        <>
          <p>
            Depending on the hosting plan you choose, you can host one or
            multiple domains with Excel Technologies.
          </p>
          <p>
            We offer flexible options to match your needs — whether you’re
            managing a single website or multiple projects.
          </p>
        </>
      ),
    },
    {
      question: "What domain should I buy?",
      answer: (
        <>
          <p>
            Choose a domain name that reflects your brand, is easy to remember,
            and preferably includes relevant keywords for better visibility.
          </p>
          <p>
            Excel Technologies provides a wide range of domain extensions to
            help you find the perfect fit for your business or personal project.
          </p>
        </>
      ),
    },
  ];

  // Toggle the open/close state of an FAQ
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    // Section for FAQs
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About Hosting
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about domains, hosting, and
            how Excel Technologies can support your online success.
          </p>
        </div>

        {/* Display each FAQ in a collapsible list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-4 sm:px-6 pb-4">
                  <div className="text-gray-600 leading-relaxed space-y-2">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
