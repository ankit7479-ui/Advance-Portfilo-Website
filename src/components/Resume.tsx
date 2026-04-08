import { motion } from 'motion/react';
import { FileText, Download, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-violet-700 text-white text-center relative overflow-hidden shadow-2xl shadow-indigo-500/20"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mt-32" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/20 rounded-full blur-3xl -mr-32 -mb-32" />

          <div className="relative z-10">
            <div className="inline-flex p-4 rounded-2xl bg-white/10 mb-8">
              <FileText size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to see my full <span className="underline decoration-white/30 underline-offset-8">Journey?</span>
            </h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Download my detailed resume to learn more about my technical background, projects, and how I can add value to your team.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#4f46e5' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-indigo-600 font-bold flex items-center justify-center gap-2 transition-all"
              >
                <Download size={20} /> Download PDF
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-white/10 text-white font-bold border border-white/20 flex items-center justify-center gap-2 transition-all"
              >
                View Online <ExternalLink size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
