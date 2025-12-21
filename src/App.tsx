import Experiences from "./components/container/Experiences";
import Faq from "./components/container/Faq";
import FeedbackForm from "./components/container/FeedbackForm";
import Footer from "./components/container/Footer";
import Header from "./components/container/HeaderSection";
import Hero from "./components/container/HeroSection";
import Industry from "./components/container/Industry";
import Portfolio from "./components/container/Portfolio";
import Process from "./components/container/Process";
import Services from "./components/container/Services";
import Testimonials from "./components/container/Testimonials";
import TrustedPartner from "./components/container/TrustedPartner";
import type { Testimonial } from "./types/Types";

const testimonials: Testimonial[] = [
  {
    id: 1,
    numberOfStars: 5,
    testimonialsDesc:
      "“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”",
    names: "Sarah Tan",
    jobPosition: "Project Manager at Finovate",
    profileImage: "./assets/images/Sarah Tan.svg",
  },
  {
    id: 2,
    numberOfStars: 5,
    testimonialsDesc:
      "“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”",
    names: "Emily Chen",
    jobPosition: "Marketing Head at Tech Solutions",
    profileImage: "./assets/images/Chen.svg",
  },
  {
    id: 3,
    numberOfStars: 5,
    testimonialsDesc:
      "“Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”",
    names: "John Lee",
    jobPosition: " Creative Director at Innovate Corp",
    profileImage: "./assets/images/John Lee.svg",
  },
];

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <TrustedPartner />
      <Experiences />
      <Process />
      <Services />
      <Industry />
      <Portfolio />
      <Testimonials testimonials={testimonials} />
      <Faq />
      <FeedbackForm />
      <Footer />
    </div>
  );
}

export default App;
