import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-8">
            LET'S TALK
          </h1>
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
            Ready to accelerate your business with AI? 
            Get in touch and we'll find the perfect solution for you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-black mb-8">GET IN TOUCH</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our team is here to help you choose the right AI agent and get started 
                  with your growth journey. No pressure, just honest advice.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-black flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Email Us</h3>
                    <p className="text-gray-600 text-lg">hello@torqueai.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-black flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Call Us</h3>
                    <p className="text-gray-600 text-lg">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-black flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Live Chat</h3>
                    <p className="text-gray-600 text-lg">Available 9 AM - 6 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="border-2 border-gray-100 p-12">
              <h3 className="text-3xl font-black mb-8">Send us a message</h3>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-bold mb-3">First Name</label>
                    <Input className="border-2 border-gray-200 rounded-none p-4 text-lg" />
                  </div>
                  <div>
                    <label className="block text-lg font-bold mb-3">Last Name</label>
                    <Input className="border-2 border-gray-200 rounded-none p-4 text-lg" />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-bold mb-3">Email</label>
                  <Input type="email" className="border-2 border-gray-200 rounded-none p-4 text-lg" />
                </div>

                <div>
                  <label className="block text-lg font-bold mb-3">Company</label>
                  <Input className="border-2 border-gray-200 rounded-none p-4 text-lg" />
                </div>

                <div>
                  <label className="block text-lg font-bold mb-3">Which AI Agent interests you?</label>
                  <select className="w-full border-2 border-gray-200 rounded-none p-4 text-lg bg-white">
                    <option>Select an AI Agent</option>
                    <option>Website AI</option>
                    <option>CRM AI</option>
                    <option>Email AI</option>
                    <option>Ads AI</option>
                    <option>Reputation AI</option>
                    <option>Local AI</option>
                    <option>Analytics AI</option>
                    <option>Intelligence AI</option>
                    <option>Not sure - need guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-bold mb-3">Tell us about your goals</label>
                  <Textarea 
                    rows={5} 
                    className="border-2 border-gray-200 rounded-none p-4 text-lg resize-none"
                    placeholder="What are your biggest business challenges? What growth goals do you have?"
                  />
                </div>

                <Button className="w-full bg-black text-white hover:bg-gray-800 font-bold text-xl py-6 rounded-none">
                  Send Message
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            PREFER TO START WITH OUR QUIZ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Take our 5-minute assessment to discover which AI agent is perfect for your business.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold px-12 py-6 text-xl rounded-none">
            Take Quiz Instead
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;