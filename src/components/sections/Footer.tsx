import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-primary font-serif text-xl font-bold">D</span>
              </div>
              <span className="font-serif text-2xl font-bold">Dentist <span className="opacity-60 font-light font-sans text-xl">at Square</span></span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-xs">
              Exceptional care for your family's oral health. Visit us in Century City for a fresh perspective on dentistry.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><a href="#" className="hover:text-white transition-colors">Emergency Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing & Finance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Patient Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><a href="#" className="hover:text-white transition-colors">General Dentistry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cosmetic Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Orthodontics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pediatric Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Oral Surgery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-primary-foreground/70 mb-6 font-sm">Subscribe to get oral health tips and exclusive offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="bg-white text-primary px-4 py-3 rounded-xl font-bold hover:bg-accent transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2026 Dentist at the Square. All rights reserved. Registered with HPCSA.
          </p>
          <p className="text-sm text-primary-foreground/50 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in Cape Town
          </p>
        </div>
      </div>
    </footer>
  );
};
