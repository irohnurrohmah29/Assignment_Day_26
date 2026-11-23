import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";
import { featuresData, servicesData } from "./data/hospitalData";

function App() {
  const handleAction = (message) => {
    alert(message);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar
        hospitalName="MedikaCare"
        onBookAppointment={() => handleAction("Membuka form Buat Janji...")}
      />

      <Hero
        headline="Kesehatan Anda Prioritas Kami"
        subheadline="Pelayanan medis terbaik dengan fasilitas lengkap dan dokter terpercaya."
        ctaText="Konsultasi Sekarang"
        onConsult={() => handleAction("Menghubungkan ke layanan konsultasi...")}
      />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-gray-600 mt-2">
            Kami memberikan perawatan terbaik untuk anda dan keluarga tercinta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((item) => (
            <FeatureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section id="layanan" className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
          Layanan Unggulan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              badge={service.badge}
              title={service.title}
              description={service.description}
              image={service.image}
              onSelectService={(title) =>
                handleAction(`Anda memilih informasi layanan: ${title}`)
              }
            />
          ))}
        </div>
      </section>

      <Footer year={2026} brandName="RS MedikaCare" />
    </div>
  );
}

export default App;
