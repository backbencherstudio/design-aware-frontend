import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { StepCard } from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Wallet,
  Scale,
  LineChart,
  Lock,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wide uppercase text-primary bg-primary/5 rounded-full border border-primary/10">
              Prototype Alpha
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-primary leading-[1.1] tracking-tight mb-8">
              Revenue-based financing for creators.
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl mb-10">
              Raise capital from fans without giving up equity. Backers receive a fixed share of future revenue, allocated automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToDemo}
                className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                View Live Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-base px-8 py-6 border-border hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
              >
                How it works
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Abstract visual representation of capital flow */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-white border border-border shadow-2xl p-8 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-border/50">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Total Allocated</div>
                  <div className="text-2xl font-display font-semibold text-primary">$124,500.00</div>
                </div>
                <div className="bg-primary/5 p-2 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="relative z-10 space-y-3 mt-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-border/50 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                      {String.fromCharCode(64 + i)}
                    </div>
                    <div className="flex-1">
                      <div className="h-2 w-24 bg-secondary rounded-full mb-2" />
                      <div className="h-2 w-16 bg-secondary/60 rounded-full" />
                    </div>
                    <div className="text-sm font-mono text-primary/70">+$245.00</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Creators need capital. Fans want to support." 
            subtitle="The traditional financing models are broken for the modern creator economy. We bridge the gap with aligned incentives."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-red-900/40" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Equity is illiquid</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Giving up permanent ownership for temporary capital is expensive. It's complex, legally heavy, and hard to value.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                <Wallet className="w-6 h-6 text-orange-900/40" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Donations don't scale</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Donations are great for small amounts, but they offer no upside for the backer, limiting the capital available.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-blue-900/40" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Loans create pressure</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Fixed monthly repayments create cashflow stress during slower months. Creators need flexibility, not liabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-primary mb-8 leading-tight">
            BackerLoop bridges the gap.
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
            Creators define a revenue share percentage. Fans purchase participation units. 
            Revenue is reported and allocated automatically. No equity exchanged, no fixed debt payments.
          </p>
          <div className="h-px w-24 bg-primary/20 mx-auto" />
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="How it works" subtitle="A transparent, automated lifecycle for revenue participation." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StepCard 
              number="01"
              title="Create a Round"
              description="Creator defines the capital needed and the percentage of future revenue they are willing to share."
              icon={FileText}
              delay={0}
            />
            <StepCard 
              number="02"
              title="Fans Back You"
              description="Backers purchase units of participation. Funds are held securely until the round target is met."
              icon={Users}
              delay={0.1}
            />
            <StepCard 
              number="03"
              title="Revenue Reported"
              description="The creator connects revenue sources or manually reports monthly income to the ledger."
              icon={LineChart}
              delay={0.2}
            />
            <StepCard 
              number="04"
              title="Auto Allocation"
              description="Smart contracts calculate and distribute the agreed share to all backers instantly."
              icon={BarChart3}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Trust / Why It's Different */}
      <section id="trust" className="py-24 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Built on trust" align="left" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-lg">No Custody of Funds</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We never hold user funds directly. All capital flows through regulated payment processors and smart contracts.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-lg">Deterministic Logic</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Allocation rules are hard-coded. There is no ambiguity about who gets paid what and when.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
                <LineChart className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-lg">Transparent Ledger</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every transaction, from funding to payout, is recorded on an immutable ledger for auditability.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-lg">Aligned Incentives</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We only make money when creators succeed. Our platform fee is taken only from successful distributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-display font-semibold mb-4">For Creators</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Access capital to grow your channel, launch a product, or hire a team without taking on debt or selling equity in your business.
              </p>
            </div>
            <div className="p-8 bg-primary text-primary-foreground rounded-lg shadow-xl shadow-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
              <h3 className="text-xl font-display font-semibold mb-4 relative z-10">For Backers</h3>
              <p className="text-primary-foreground/80 font-light leading-relaxed relative z-10">
                Support the creators you believe in and share in their financial success. Build a portfolio of revenue-generating assets.
              </p>
            </div>
            <div className="p-8 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-display font-semibold mb-4">For Advisors</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Provide your clients with a structured, legally sound instrument for raising community capital. Compliant and transparent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo CTA */}
      <section id="demo" className="py-32 bg-secondary/20 border-t border-border text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-6">
            See the mechanics in action
          </h2>
          <p className="text-muted-foreground text-lg font-light mb-10">
            Explore our interactive prototype to understand how revenue reporting and allocation works in real-time.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-10 py-8 rounded-md bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            onClick={() => {
              // In a real app, this would route to a demo dashboard
              // For now, it just scrolls up or alerts, but let's make it feel real
              alert("Entering Demo Mode... (Prototype Only)");
            }}
          >
            View Live Demo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
