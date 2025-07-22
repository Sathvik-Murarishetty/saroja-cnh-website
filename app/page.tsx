import AboutUs from '@/components/about-us';
import { Clients } from '@/components/clients';
import { Header } from '@/components/header'
import HeroText from '@/components/hero-text';
import { PhotoGrid } from '@/components/photo-grid';
import { OurServices } from '@/components/our-services';
import Careers from '@/components/careers';
import { ContactUs } from '@/components/contact-us';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroText />
      <Clients />
      <PhotoGrid />
      <AboutUs />
      <OurServices />
      <Careers />
      <ContactUs />
    </div>
  );
}
