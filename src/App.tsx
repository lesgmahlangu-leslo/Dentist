/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Navbar } from "@/src/components/layout/Navbar";
import { Hero } from "@/src/components/sections/Hero";
import { Services } from "@/src/components/sections/Services";
import { About } from "@/src/components/sections/About";
import { Team } from "@/src/components/sections/Team";
import { FAQ } from "@/src/components/sections/FAQ";
import { BookingForm } from "@/src/components/sections/BookingForm";
import { Footer } from "@/src/components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF9]">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Services />
        <About />
        <Team />
        <FAQ />
        <BookingForm />
      </motion.main>
      <Footer />
    </div>
  );
}
