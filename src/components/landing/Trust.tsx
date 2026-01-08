import { Shield, Lock, CreditCard } from "lucide-react";

const Trust = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/50 flex items-center justify-center">
              <Shield className="w-5 h-5 text-muted-foreground" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              Trust & Compliance
            </h2>
          </div>
          <p className="text-muted-foreground text-center leading-relaxed mb-10 max-w-xl mx-auto">
            SyncQuillAI is a SaaS platform designed for professional agencies. Payments are collected via secure invoices and payment links.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 px-5 py-3 glass rounded-full">
              <Lock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 glass rounded-full">
              <CreditCard className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Secure Payments</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 glass rounded-full">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;