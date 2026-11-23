function Navbar({ hospitalName, onBookAppointment }) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-teal-600">
          + {hospitalName}
        </a>

        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#beranda" className="hover:text-teal-600 transition">Beranda</a>
          <a href="#layanan" className="hover:text-teal-600 transition">Layanan</a>
          <a href="#dokter" className="hover:text-teal-600 transition">Dokter</a>
          <a href="#kontak" className="hover:text-teal-600 transition">Kontak</a>
        </div>

        <button
          onClick={onBookAppointment}
          className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
        >
          Buat Janji
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
