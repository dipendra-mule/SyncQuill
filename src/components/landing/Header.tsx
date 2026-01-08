import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-5 sticky top-0 z-50 glass border-b border-border/30">
      <div className="container-wide flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-lg font-semibold text-foreground">SyncQuillAI</span>
        </div>
        <Button 
          size="sm" 
          className="rounded-full px-6 bg-gradient-to-r from-primary to-indigo-500 hover:opacity-90 transition-all duration-300 shadow-glow"
        >
          Request Access
        </Button>
      </div>
    </header>
  );
};

export default Header;