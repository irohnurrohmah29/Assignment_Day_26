function ServiceCard({ badge, title, description, image, onSelectService }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col">
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">
            {badge}
          </span>
          <h3 className="text-lg font-bold text-gray-800 mt-3">{title}</h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">{description}</p>
        </div>
        <button
          onClick={() => onSelectService(title)}
          className="mt-5 text-sm font-semibold text-teal-600 hover:text-teal-800 self-start cursor-pointer"
        >
          Pelajari Selengkapnya →
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
