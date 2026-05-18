import React from "react";
import { motion } from "motion/react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you take dental insurance?",
    answer: "Yes, we work with most major medical aids and dental insurance providers. Our team can help you check your benefits and handle all the paperwork."
  },
  {
    question: "How long does a typical checkup take?",
    answer: "A standard checkup and cleaning usually takes about 45 to 60 minutes. We value your time and strive to keep appointments on schedule."
  },
  {
    question: "Do you offer emergency dental services?",
    answer: "Absolutely. If you are experiencing severe pain or have a dental emergency, please call us immediately. We reserve daily emergency slots for urgent cases."
  },
  {
    question: "Is there parking available at The Square?",
    answer: "Yes, there is ample secure parking available within The Square mall. We provide validated parking for all our patients."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Common Questions
          </div>
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about visiting Dentist at the Square.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100">
              <AccordionTrigger className="text-left py-6 text-lg font-medium hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
