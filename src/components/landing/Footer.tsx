const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">S</span>
              </div>
              <span className="text-lg font-semibold text-foreground">SyncQuillAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Software as a Service (SaaS)
            </p>
          </div>
          <div className="mb-8">
            <a
              href="mailto:contact@syncquillai.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              contact@syncquillai.com
            </a>
          </div>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} SyncQuillAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;