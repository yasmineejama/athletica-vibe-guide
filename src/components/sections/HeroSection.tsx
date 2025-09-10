import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/athletica-hero.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-hero font-bold text-gradient-primary">
            Elevate Your Performance
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover premium athletic gear, cutting-edge supplements, and professional equipment designed for champions who refuse to settle for ordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button asChild className="btn-hero text-lg px-8 py-3">
              <Link to="/categories/gear">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" className="text-lg px-8 py-3 btn-outline-primary">
              <Link to="/categories">Browse Categories</Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div>Happy Athletes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div>Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div>Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}