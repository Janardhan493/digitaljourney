import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Stats from "../components/Stats";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Trusted from "../components/Trusted";
import Features from "../components/Features";
import BackToTop from "../components/BackToTop";
import Founder from "../components/Founder";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
     <Stats />
<Services />
<Features />
<Process />
      <About />
      <Founder />
        <Portfolio />
        <Trusted />
        <Pricing />
              <WhyChoose />
               <Testimonials />
               <FAQ />
               <CTA />
                 <Contact />
                   <Footer />
                   <BackToTop />
                     <WhatsAppButton />
    </>
  );
}