import { Building2, Linkedin, Search, Lightbulb } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Content Marketing Agencies",
    description: "Scale blog and web content production",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Ghostwriting Agencies",
    description: "Maintain authentic executive voices",
  },
  {
    icon: Search,
    title: "SEO and PR Agencies",
    description: "Create consistent branded content",
  },
  {
    icon: Lightbulb,
    title: "Thought Leadership Firms",
    description: "Preserve unique expert perspectives",
  },
];

const Audience = () => {
  return (
    <section className="section-padding relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-wide relative">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
          Built for <span className="gradient-text">Agencies</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Designed specifically for content professionals who need to scale without sacrificing quality.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="text-center p-8 glass rounded-2xl group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/50 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <audience.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;