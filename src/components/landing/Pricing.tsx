import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="section-padding relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-accent/30 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="container-wide relative">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Flexible subscription pricing based on agency size and usage. One-time and recurring plans available.
          </p>

          <div className="p-8 glass rounded-2xl border-primary/30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Enterprise Ready</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Unlimited voice profiles</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
              </div>
              <Button 
                size="lg"
                className="rounded-full px-8 bg-gradient-to-r from-primary to-indigo-500 hover:opacity-90 transition-all duration-300 shadow-glow whitespace-nowrap"
              >
                Request Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;