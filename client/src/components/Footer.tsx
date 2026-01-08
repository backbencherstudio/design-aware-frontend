export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary/20 rounded-sm flex items-center justify-center text-primary font-display font-bold text-sm">
              B
            </div>
            <span className="font-display font-semibold text-lg text-primary/80">BackerLoop</span>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground/70 max-w-2xl font-light">
            BackerLoop is a demonstration platform illustrating revenue allocation mechanics. No funds are held, transferred, or custodied by BackerLoop.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} BackerLoop Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
