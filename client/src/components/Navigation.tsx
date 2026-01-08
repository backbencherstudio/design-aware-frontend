import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/40 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-primary-foreground font-display font-bold text-xl group-hover:bg-primary/90 transition-colors">
            B
          </div>
          <span className="font-display font-semibold text-xl tracking-tight text-primary">BackerLoop</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('problem')} 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Mission
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            How it Works
          </button>
          <button 
            onClick={() => scrollToSection('trust')} 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Trust
          </button>
          
          <Button 
            variant="outline" 
            className="font-medium text-primary border-primary/20 hover:bg-primary/5 hover:text-primary"
            onClick={() => scrollToSection('demo')}
          >
            View Demo
          </Button>
        </div>
      </div>
    </nav>
  );
}
