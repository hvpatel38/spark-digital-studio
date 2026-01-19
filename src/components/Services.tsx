import { motion } from "framer-motion";
import { 
  Share2, 
  Globe, 
  Search, 
  Palette, 
  Video, 
  Target, 
  Megaphone, 
  ShoppingCart, 
  Linkedin 
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Content",
    description: "Engaging content that captures attention and builds community around your brand.",
    tag: "Strategy"
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "High-converting websites designed to turn visitors into loyal customers.",
    tag: "Development"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings and drive organic traffic that converts.",
    tag: "Development"
  },
  {
    icon: Palette,
    title: "Branding Guidelines",
    description: "Complete brand identity systems that make your business unforgettable.",
    tag: "Strategy + Design"
  },
  {
    icon: Video,
    title: "Reels & Video Content",
    description: "From scripting to shooting to editing — viral-ready video content.",
    tag: "Full Production"
  },
  {
    icon: Target,
    title: "Digital Strategy",
    description: "Data-driven strategies that align with your business objectives.",
    tag: "Strategy"
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Paid and organic campaigns that expand your reach exponentially.",
    tag: "Marketing"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platform",
    description: "Scalable online stores built for seamless shopping experiences.",
    tag: "Development"
  },
  {
    icon: Linkedin,
    title: "LinkedIn Lead Generation",
    description: "B2B lead generation strategies that fill your sales pipeline.",
    tag: "Marketing"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to accelerate your growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 card-shadow hover:glow-primary"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Tag */}
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground mb-4">
                {service.tag}
              </span>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
