import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhyCatalyst from './components/WhyCatalyst/WhyCatalyst';
import Programs from './components/Programs/Programs';
import Faculty from './components/Faculty/Faculty';
import Testimonials from './components/Testimonials/Testimonials';
import Process from './components/Process/Process';
import CtaDemo from './components/CtaDemo/CtaDemo';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyCatalyst />
        <Programs />
        <Faculty />
        <Testimonials />
        <Process />
        <CtaDemo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
