import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Courses from '@/components/Courses';
import Practice from '@/components/Practice';
import Internships from '@/components/Internships';
import Achievements from '@/components/Achievements';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Courses />
        <Practice />
        <Internships />
        <Achievements />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
