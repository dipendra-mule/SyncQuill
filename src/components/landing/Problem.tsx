import { AlertCircle, Clock, Users, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    text: "Generic AI writing reduces content quality",
  },
  {
    icon: Clock,
    text: "Agencies spend excessive time editing AI output",
  },
  {
    icon: Users,
    text: "Inconsistent voice leads to client churn",
  },
  {
    icon: TrendingDown,
    text: "Scaling content without quality loss is difficult",
  },
];

const Problem = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            The Challenge with <span className="gradient-text">Generic AI Content</span>
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
            Most AI tools create uniform, detectable content that fails to capture unique brand voices.
          </p>
          <div className="grid gap-4 md:gap-5">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center gap-5 p-6 glass rounded-2xl transition-all duration-300 hover:border-primary/30 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <problem.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <p className="text-foreground font-medium text-lg">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;