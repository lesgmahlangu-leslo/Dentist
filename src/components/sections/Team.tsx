import React from "react";
import { motion } from "motion/react";
import { Linkedin, Mail, Star } from "lucide-react";

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Lead Dentist & Founder",
    id: "dentist-1",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Dr. James Wilson",
    role: "Orthodontist",
    id: "dentist-2",
    image: "https://images.unsplash.com/photo-1582750433449-64c656fb19f0?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Dr. Elena Rossi",
    role: "Pediatric Specialist",
    id: "dentist-3",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Mark Henderson",
    role: "Head Hygienist",
    id: "hygienist-1",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 px-6 bg-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            >
              The Experts
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Meet Our Award-Winning <span className="text-primary italic">Clinical Team</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-primary font-bold hover:underline cursor-pointer"
          >
            Join Our Team <Linkedin className="w-5 h-5" />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/5] bg-gray-200 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                   <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                   {[1, 2, 3, 4, 5].map((s) => (
                     <Star key={s} className="w-3 h-3 text-secondary fill-secondary" />
                   ))}
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
