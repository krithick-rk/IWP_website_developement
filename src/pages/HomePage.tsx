import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

export const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
              Empowering Student Careers Through{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Campus Placements
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connecting talented students with top companies for a brighter
              future. Our placement cell works tirelessly to ensure students get
              the best career opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/student-details"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                Get Started <ArrowRightIcon size={18} />
              </Link>
              <Link
                to="/visiting-companies"
                className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg shadow-sm hover:shadow border border-gray-200 hover:border-purple-200 transition-all duration-200"
              >
                View Companies
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-60 animate-pulse delay-300"></div>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1470&q=80"
                alt="Students celebrating graduation"
                className="w-full h-auto rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
