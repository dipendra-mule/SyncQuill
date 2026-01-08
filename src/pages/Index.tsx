import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Features from "@/components/landing/Features";
import Audience from "@/components/landing/Audience";
import Pricing from "@/components/landing/Pricing";
import Trust from "@/components/landing/Trust";
import Refund from "@/components/landing/Refund";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Audience />
        <Pricing />
        <Trust />
        <Refund />
      </main>
      <Footer />
    </div>
  );
};

export default Index;