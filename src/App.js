import Contact from "./components/Contact";
import GoToTop from "./components/GoToTop";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <GoToTop />
    </>
  )
}