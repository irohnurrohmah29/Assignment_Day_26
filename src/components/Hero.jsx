function Hero({ headline, subheadline, ctaText, onConsult }) {
  return (
    <header id="beranda" className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          {headline}
        </h1>
        <p className="mt-4 text-base md:text-lg text-teal-100 max-w-2xl mx-auto">
          {subheadline}
        </p>
        <button
          onClick={onConsult}
          className="mt-8 bg-white text-teal-700 hover:bg-teal-50 font-bold px-6 py-3 rounded-lg shadow-md transition cursor-pointer"
        >
          {ctaText}
        </button>
      </div>
    </header>
  );
}

export default Hero;
