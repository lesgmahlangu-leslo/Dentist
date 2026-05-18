import React from "react";
import { motion } from "motion/react";
import { 
  Stethoscope, 
  Sparkles, 
  Settings, 
  Smile, 
  ShieldCheck, 
  Activity,
  ArrowUpRight
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "General Dentistry",
    description: "Routine checkups, cleanings, and preventative care to keep your smile healthy and bright.",
    icon: Stethoscope,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and professional whitening treatments.",
    icon: Sparkles,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Orthodontics",
    description: "Modern solutions like Invisalign and traditional braces for perfectly aligned teeth.",
    icon: Smile,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Pediatric Care",
    description: "A gentle and fun environment for children's dental health from their very first tooth.",
    icon: ShieldCheck,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Oral Surgery",
    description: "Expert surgical procedures including wisdom teeth removal and dental implants.",
    icon: Settings,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Gum Health",
    description: "Specialized periodontics to treat and prevent gum disease for long-term oral stability.",
    icon: Activity,
    color: "bg-teal-50 text-teal-600",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-secondary/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          >
            Our Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Comprehensive Dental <span className="text-primary italic">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            We offer a full range of dental services to ensure your entire family receives the highest standard of care in one convenient location.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden bg-accent/10">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl mb-3 flex items-center justify-between">
                    {service.title}
                    <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-full" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center justify-center p-8 bg-primary rounded-3xl text-white relative overflow-hidden"
        >
          <div className="relative z-10 text-center md:text-left md:flex gap-12 items-center">
             <div>
               <h3 className="text-2xl font-bold mb-2">Not sure what you need?</h3>
               <p className="text-primary-foreground/80 max-w-md">Our expert diagnostics team can help you identify the best treatment plan for your specific goals.</p>
             </div>
             <div className="mt-6 md:mt-0">
               <button className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-accent transition-colors shadow-lg shadow-black/10 flex items-center gap-2">
                 Free Consultation
                 <ArrowUpRight className="w-5 h-5" />
               </button>
             </div>
          </div>
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-20 -mb-20 blur-xl" />
        </motion.div>
      </div>
    </section>
  );
};
