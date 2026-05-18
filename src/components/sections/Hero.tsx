import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-accent/30">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-3 h-3" />
            Your Health is Our Priority
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900">
            A Greener Path to a <span className="text-primary italic">Healthy Smile</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Welcome to Dentist at the Square. We combine state-of-the-art dental technology with a warm, personal approach to care. Experience dentistry that feels like a breath of fresh air.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-white text-lg h-14 px-8 shadow-lg shadow-primary/20">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-gray-700 text-lg h-14 px-8 hover:bg-secondary/10">
              View Our Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 pt-8 border-t border-gray-200">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-secondary/50 flex items-center justify-center overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">1,200+ Happy Patients</p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Sparkles key={i} className="w-3 h-3 text-secondary fill-secondary" />
                ))}
                <span className="text-xs text-gray-500 ml-1">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-auto md:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200"
              alt="Modern Dental Office"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Floating Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-6 right-6 glass p-6 rounded-2xl shadow-xl max-w-[240px]"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 text-primary">
                <HeartPulse />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Emergency Care</h3>
              <p className="text-sm text-gray-600">Available 24/7 for urgent dental needs in our community.</p>
            </motion.div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-secondary/20 border-dashed rounded-full animate-[spin_45s_linear_infinite_reverse]" />
        </motion.div>
      </div>
    </section>
  );
};
