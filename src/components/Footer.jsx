function Footer({ year, brandName }) {
  return (
    <footer id="kontak" className="bg-gray-900 text-gray-400 py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div className="flex space-x-6">
          <a href="#tentang" className="hover:text-white transition">Tentang Kami</a>
          <a href="#privasi" className="hover:text-white transition">Privasi</a>
          <a href="#syarat" className="hover:text-white transition">Syarat Ketentuan</a>
        </div>
        <p>© {year} {brandName}.</p>
      </div>
    </footer>
  );
}

export default Footer;
