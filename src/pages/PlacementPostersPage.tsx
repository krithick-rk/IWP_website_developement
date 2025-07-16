export const PlacementPostersPage = () => {
  const posters = [
    {
      title: "TechCorp Hiring Drive",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "InnovateX Campus Visit",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "DataWave Open Interviews",
      image:
        "https://images.unsplash.com/photo-1531497865142-487f904db7d7?auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        Placement Posters
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posters.map((poster, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-md border border-white/50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={poster.image}
              alt={poster.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {poster.title}
              </h2>
              <p className="text-sm text-gray-600">
                Stay tuned for upcoming placement activities and make sure to
                participate in the top hiring drives.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
