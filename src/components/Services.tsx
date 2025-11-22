import { Bot, BarChart3, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent conversational agents that handle customer support 24/7."
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast trends and customer behavior with high accuracy models."
  },
  {
    icon: Globe,
    title: "Content Generation",
    description: "Automated SEO-optimized content creation for blogs and social media."
  },
  {
    icon: Zap,
    title: "Ad Optimization",
    description: "Real-time bid management and creative testing using AI."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition duration-300 border border-zinc-800 hover:border-purple-500/30">
              <service.icon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
