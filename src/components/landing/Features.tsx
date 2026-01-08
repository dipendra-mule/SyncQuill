import { Fingerprint, PenTool, Sparkles, LayoutList, Image } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Voice DNA Analysis",
    description: "Advanced analysis of real writing samples to capture unique style patterns and linguistic fingerprints",
  },
  {
    icon: PenTool,
    title: "Brand-Consistent Output",
    description: "Ghostwriting that maintains your client's authentic voice across all content types",
  },
  {
    icon: Sparkles,
    title: "AI Quality Refinement",
    description: "Automated cleanup and refinement ensuring polished, professional output",
  },
  {
    icon: LayoutList,
    title: "Structured Formatting",
    description: "Ready-to-use formatting for blogs, LinkedIn posts, and social content",
  },
  {
    icon: Image,
    title: "Optional Visuals",
    description: "Enhance content with AI-generated diagrams and supporting visuals",
  },
];

const Features = () => {
  return (
    <section className="section-padding relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-accent/30 rounded-full blur-[120px]" />
      </div>

      <div className="container-wide relative">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
          Powerful <span className="gradient-text">Features</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Everything you need to scale content production while maintaining brand authenticity.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-7 glass rounded-2xl group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/50 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;