import Hero from "../components/Hero";
import TodayTop from "../components/TodayTop";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TodayTop />
      </main>
      <Footer />

    </>
  )
}

export default HomePage;