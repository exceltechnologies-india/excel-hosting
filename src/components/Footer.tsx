import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

// Footer component displays company info, quick links, and legal links
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info Section */}
          <div className="md:col-span-1">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <img
                src="/logo-white.png"
                alt="Excel Technologies Logo"
                className="h-10 w-auto"
              />
            </div>

            <p className="text-gray-400 mb-4 max-w-md mx-auto md:mx-0">
              Your trusted partner for reliable web hosting, domain services,
              and digital solutions. Serving businesses since 2006 with 16+
              years of expertise.
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              {/* Social and email links */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:sales@exceltechnologies.in"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#hosting-plans"
                  className="hover:text-white transition-colors"
                >
                  Hosting Plans
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links Section */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/terms-conditions"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; 2025 Excel Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
