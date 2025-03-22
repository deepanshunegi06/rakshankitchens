import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Services from './components/Services';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import KitchenGallery from './components/Images';
import LuxuryShowcase from './components/LuxuryShowcase';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LuxuryShowcase />
      <Statistics />
      <Services />
      <Benefits />
      
      {/* Kitchen Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-[#C9A66B] mb-4">Featured Kitchen Designs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Discover our collection of premium modular kitchens, where luxury meets functionality
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-8">
            <KitchenGallery />
          </div>
        </div>
      </section>
      
      <FAQ />
      <Footer />
    </main>
  );
}
