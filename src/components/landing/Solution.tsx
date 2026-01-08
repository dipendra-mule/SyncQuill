import { Upload, Cpu, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload writing samples",
    description: "Provide samples of your client's existing content to analyze",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Voice analysis",
    description: "Our AI identifies unique patterns, tone, and style",
  },
  {
    icon: FileText,
    step: "03",
    title: "Generate content",
    description: "Create new content that matches the original voice",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Minimal editing",
    description: "Publish ready-to-use content with confidence",
  },
];

const Solution = () => {
  return (
    <section className="section-padding relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="container-wide relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            How <span className="gradient-text">SyncQuillAI</span> Works
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            A simple four-step process to preserve authentic brand voices at scale.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 glass rounded-2xl group hover:border-primary/30 transition-all duration-300"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-border to-transparent" />
                )}
                
                <div className="text-3xl font-bold text-muted-foreground/30 mb-4">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/50 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;