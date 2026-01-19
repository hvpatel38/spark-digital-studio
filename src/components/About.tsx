import { motion } from "framer-motion";
import { Check } from "lucide-react";
const features = ["Data-driven approach to every campaign", "Dedicated team of marketing specialists", "Transparent reporting and analytics", "Scalable solutions for any business size"];
const About = () => {
  return <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why Choose <span className="text-gradient">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're not just another marketing agency. We're your strategic partner in navigating the digital landscape. With years of experience and a passion for results, we craft campaigns that don't just look good — they perform.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => <motion.li key={feature} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.li>)}
            </ul>
          </motion.div>

          {/* Right visual */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-card to-secondary border border-border overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-primary opacity-20 animate-pulse-glow" />
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="font-display text-6xl md:text-8xl font-bold text-gradient">2+</div>
                <div className="text-muted-foreground text-lg mt-2">Years of Excellence</div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-20 h-20 rounded-xl bg-secondary border border-border flex items-center justify-center animate-float">
                <span className="text-2xl font-display font-bold text-primary">SEO</span>
              </div>
              <div className="absolute bottom-8 left-8 w-24 h-24 rounded-xl bg-secondary border border-border animate-float flex-col flex items-start justify-center" style={{
              animationDelay: "-3s"
            }}>
                <span className="text-2xl font-bold text-accent mx-[20px] font-mono">SSM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;