import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* CTA Card */}
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-b from-card to-secondary border border-border overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-primary/20 to-transparent" />
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative">
              Ready to <span className="text-gradient">Scale</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative">
              Let's discuss how we can help your business dominate the digital space. Get in touch for a free consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 relative">
              <Button variant="hero" size="xl" className="group">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Contact info */}
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-muted-foreground relative">
              <a href="mailto:hello@agency.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@agency.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>New York, NY</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
