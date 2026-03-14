import React from "react";
import { Leaf, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground pt-16 pb-8 px-6 md:px-[15%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-secondary" />
            <span className="font-display font-bold text-2xl tracking-tight text-white">Natura.</span>
          </div>
          <p className="text-white/80 text-sm leading-relaxed max-w-xs">
            Committed to bringing you the purest, most sustainable products straight from the earth to your home.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-display font-semibold text-lg text-white">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="#home" className="text-white/80 hover:text-secondary transition-colors">Home</a></li>
            <li><a href="#features" className="text-white/80 hover:text-secondary transition-colors">Our Values</a></li>
            <li><a href="#process" className="text-white/80 hover:text-secondary transition-colors">How it Works</a></li>
            <li><a href="#about" className="text-white/80 hover:text-secondary transition-colors">About Us</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-display font-semibold text-lg text-white">Contact</h4>
          <ul className="flex flex-col gap-2 text-white/80 text-center md:text-left">
            <li>123 Evergreen Terrace</li>
            <li>Portland, OR 97204</li>
            <li className="mt-2 text-secondary hover:text-white transition-colors cursor-pointer">hello@natura.com</li>
            <li className="text-secondary hover:text-white transition-colors cursor-pointer">(555) 123-4567</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Natura Organics. All rights reserved.</p>
      </div>
    </footer>
  );
}
