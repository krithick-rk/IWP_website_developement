import { UploadIcon, FileTextIcon, CheckCircleIcon } from "lucide-react";

export const UploadOffersPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Upload Offers
        </h1>
        <p className="text-lg text-gray-600">
          Submit the offer letters received from companies. Only verified
          uploads will be approved.
        </p>
      </header>
      <form className="bg-white/50 backdrop-blur-md rounded-xl shadow-md border border-white/50 p-6 space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <FileTextIcon size={16} /> Register Number
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your register number"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <UploadIcon size={16} /> Upload Offer Letter (PDF)
          </label>
          <input
            type="file"
            accept="application/pdf"
            className="w-full px-4 py-2 border rounded-lg text-sm text-gray-700"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-2"
          >
            <CheckCircleIcon size={18} /> Submit Offer
          </button>
        </div>
      </form>
    </div>
  );
};
