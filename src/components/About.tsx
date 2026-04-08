import { motion } from 'motion/react';
import { User, Code, Database, Layout } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Experience', value: 'Aspiring', icon: User },
    { label: 'Projects', value: '10+', icon: Layout },
    { label: 'Technologies', value: '15+', icon: Code },
    { label: 'Databases', value: '3+', icon: Database },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2 aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-indigo-600/20 rounded-3xl rotate-6 scale-105" />
            <div className="absolute inset-0 bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden">
              <img
                src="https://picsum.photos/seed/ankit/800/800"
                alt="Ankit Kourav"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tight">
              Crafting Digital <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              I'm a self-motivated learner and aspiring developer passionate about building user-friendly and visually appealing web experiences. With a strong foundation in <span className="text-white font-medium">Python, Django, and React</span>, I focus on creating robust backend systems that power seamless frontend interactions.
            </p>
            <p className="text-lg text-zinc-400 mb-12 leading-relaxed">
              My goal is to kickstart a career where I can contribute to impactful projects while continuously expanding my technical horizons. I believe in clean code, efficient algorithms, and user-centric design.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/30 transition-colors"
                >
                  <stat.icon className="text-indigo-400 mb-4" size={24} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
