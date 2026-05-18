import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Award, Clock, Users } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#FDFBF9]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
              alt="Our Dental Practice" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
               <div className="text-white">
                 <p className="text-4xl font-bold mb-1">15+</p>
                 <p className="text-sm uppercase tracking-widest opacity-80">Years of Experience</p>
               </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-3xl -z-10 rotate-6" />
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            About the Practice
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
            Excellence in <span className="text-primary italic">Every Detail</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            At Dentist at the Square, we believe that dental visits should be something you look forward to. Located in the heart of the community, our practice combines a luxury environment with compassionate, clinical excellence.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            {[
              { icon: Award, label: "Certified Experts", text: "Globally recognized staff" },
              { icon: Clock, label: "Prompt Service", text: "Minimal wait times" },
              { icon: Users, label: "Family Focused", text: "Care for all generations" },
              { icon: CheckCircle2, label: "Painless Tech", text: "Non-invasive methods" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.label}</h4>
                  <p className="text-xs text-gray-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="bg-white p-6 rounded-2xl border-l-4 border-primary shadow-sm mb-8">
            <p className="text-gray-700 italic text-lg mb-4">
              "Our mission is to redefine the dental experience by making it human, warm, and exceptionally accurate."
            </p>
            <cite className="text-sm font-bold text-primary">— Dr. Sarah Mitchell, Founder</cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};
