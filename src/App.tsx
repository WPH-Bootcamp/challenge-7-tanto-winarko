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
import type { Testimonial } from "./types/TestimonialType";
import type { FaqType } from "./types/FaqType";

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

const faqProps: FaqType[] = [
  {
    question: "What Services Do You Offer?",
    answer:
      "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
  },
  {
    question: "How do I know if this is right for my business?",
    answer:
      "Book a free consult — we’ll assess your goals and recommend the right approach.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every project is different. Let’s talk about your needs to get a tailored estimate.",
  },
  {
    question: "How long does it take?",
    answer:
      "Depends on scope — but we always prioritize quality and deadlines.",
  },
  {
    question: "Can I start with a small project first?",
    answer:
      "Absolutely. We often begin with MVPs or pilot projects.",
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
      <Faq faqs={faqProps} />
      <FeedbackForm />
      <Footer />
    </div>
  );
}

export default App;
