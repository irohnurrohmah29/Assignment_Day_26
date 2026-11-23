function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
      <div className="w-14 h-14 mx-auto bg-teal-50 text-teal-600 rounded-full flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2 leading-relaxed">{description}</p>
    </div>
  );
}

export default FeatureCard;
