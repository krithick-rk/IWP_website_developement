import { Building2Icon, CheckIcon } from "lucide-react";

export const VisitingCompaniesPage = () => {
  const companies = [
    { name: "TechCorp", domain: "Software Solutions" },
    { name: "InnovateX", domain: "AI & Machine Learning" },
    { name: "DataWave", domain: "Data Analytics" },
    { name: "CloudSync", domain: "Cloud Infrastructure" },
    { name: "FinEdge", domain: "FinTech & Banking" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        Visiting Companies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {companies.map((company, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-5 bg-white/60 border border-white/40 rounded-xl shadow-sm hover:shadow-lg backdrop-blur-md transition"
          >
            <div className="p-2 rounded-full bg-purple-100 text-purple-700">
              <Building2Icon size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {company.name}
              </h2>
              <p className="text-sm text-gray-600">{company.domain}</p>
              <div className="flex items-center text-sm text-green-600 mt-1">
                <CheckIcon size={14} className="mr-1" /> Confirmed
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
