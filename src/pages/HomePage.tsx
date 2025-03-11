import Hero from "../components/Hero";
import TodayTop from "../components/TodayTop";
import Header from "../ui/Header";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TodayTop />
      </main>
    </>
  )
}

export default HomePage;