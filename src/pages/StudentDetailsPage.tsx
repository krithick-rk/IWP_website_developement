import {
  UserIcon,
  BookOpenIcon,
  GraduationCapIcon,
  BarChart3Icon,
  CalculatorIcon,
  CheckCircleIcon,
} from "lucide-react";

export const StudentDetailsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Student Details
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Enter your academic information to help us match you with the best
          career opportunities.
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-white/40 backdrop-blur-md rounded-xl shadow-lg border border-white/50 overflow-hidden transition-all hover:shadow-xl">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
              <h2 className="text-xl font-semibold text-white">
                Student Data Entry
              </h2>
            </div>
            <div className="p-6">
              <form>
                <div className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <UserIcon size={16} />
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                      placeholder="Enter student's full name"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <UserIcon size={16} />
                      Register Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                      placeholder="Enter register number"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <BookOpenIcon size={16} />
                        10th Marks (%)
                      </label>
                      <input
                        type="number"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                        placeholder="Enter 10th percentage"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <GraduationCapIcon size={16} />
                        12th Marks (%)
                      </label>
                      <input
                        type="number"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                        placeholder="Enter 12th percentage"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <BarChart3Icon size={16} />
                      Semester Scores
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                      placeholder="Enter semester scores (comma separated)"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <CalculatorIcon size={16} />
                      Consolidated Aggregate (%)
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                      placeholder="Enter consolidated aggregate"
                    />
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <CheckCircleIcon size={18} />
                      Submit Details
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative max-w-md">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-pulse delay-300"></div>
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1470&q=80"
              alt="Student working on laptop"
              className="relative z-10 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
