import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function StepCard({ number, title, description, icon: Icon, delay = 0 }: StepCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative p-8 rounded-lg border border-border bg-card hover:border-primary/20 transition-colors group"
    >
      <div className="absolute top-8 right-8 text-6xl font-display font-bold text-muted/30 group-hover:text-primary/5 transition-colors select-none">
        {number}
      </div>
      
      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
        <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
