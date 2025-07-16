import { Link } from "react-router-dom";
import {
  GlobeIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white/70 backdrop-blur-md border-t border-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              PlacementPortal
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Empowering student careers through campus placements and industry
              connections.
            </p>
            <div className="flex space-x-4">
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon].map(
                (Icon, i) => (
                  <a
                    href="#"
                    key={i}
                    className="text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "Home",
                "Student Details",
                "Upload Offers",
                "Placement Posters",
                "Visiting Companies",
              ].map((label, i) => (
                <li key={label}>
                  <Link
                    to={
                      [
                        "/",
                        "/student-details",
                        "/upload-offers",
                        "/placement-posters",
                        "/visiting-companies",
                      ][i]
                    }
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                "Interview Tips",
                "Resume Builder",
                "Placement Preparation",
                "Industry Insights",
                "Career Guidance",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPinIcon size={18} className="text-purple-600 mt-0.5" />
                <span className="text-sm text-gray-600">
                  University Campus, Innovation Road, Tech City, 400001
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon size={18} className="text-purple-600" />
                <span className="text-sm text-gray-600">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-2">
                <MailIcon size={18} className="text-purple-600" />
                <span className="text-sm text-gray-600">
                  placements@university.edu
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <GlobeIcon size={18} className="text-purple-600" />
                <span className="text-sm text-gray-600">
                  www.university.edu/placements
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-center text-gray-500">
            © {new Date().getFullYear()} University Placement Portal. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
