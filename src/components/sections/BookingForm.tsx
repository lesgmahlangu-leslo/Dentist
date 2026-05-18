import React from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Send, MessageSquare } from "lucide-react";

const formSchema = z.z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

export const BookingForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    alert("Appointment request sent! We will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Connect With Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Schedule Your <span className="text-primary italic">Visit Today</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-lg leading-relaxed">
            Ready for a brighter, healthier smile? Fill out the form and our concierge team will reach out within 2 hours to confirm your preferred slot.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-primary flex-shrink-0">
                <Calendar />
              </div>
              <div>
                <h4 className="text-lg font-bold">Office Hours</h4>
                <p className="text-gray-500">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-500">Sat: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-primary flex-shrink-0">
                <MessageSquare />
              </div>
              <div>
                <h4 className="text-lg font-bold">Direct Contact</h4>
                <p className="text-primary font-bold">+27 12 345 6789</p>
                <p className="text-gray-500">hello@dentistsquare.co.za</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-accent/30 rounded-3xl border border-dashed border-primary/20">
             <p className="text-sm font-medium text-gray-700 mb-2">📍 Location</p>
             <p className="text-sm text-gray-500">Suite 402, The Square Mall, Century City, Cape Town, 7441</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#FDFBF9] p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                   control={form.control}
                   name="phone"
                   render={({ field }) => (
                     <FormItem>
                       <FormLabel>Phone Number</FormLabel>
                       <FormControl>
                         <Input placeholder="+27 ..." className="bg-white" {...field} />
                       </FormControl>
                       <FormMessage />
                     </FormItem>
                   )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Service</FormLabel>
                    <FormControl>
                      <select 
                        {...field} 
                        className="w-full h-10 px-3 bg-white border border-gray-200 rounded-md text-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="general">General Checkup</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="ortho">Orthodontics</option>
                        <option value="implant">Dental Implants</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Note (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Any specific concerns?" className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full h-14 bg-primary text-white text-lg font-bold gap-2">
                Send Request
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>

      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
    </section>
  );
};
