import { useState } from 'react';
import { Mail, Send, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [copyMessage, setCopyMessage] = useState('');

  const handleCopyEmail = async () => {
    const email = 'wrmuakw@gmail.com';

    try {
      await navigator.clipboard.writeText(email);
      setCopyMessage('Copied to clipboard');
      window.setTimeout(() => setCopyMessage(''), 2500);
    } catch (error) {
      setCopyMessage('Unable to copy email');
      window.setTimeout(() => setCopyMessage(''), 2500);
    }
  };

  return (
    <footer id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b14] to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#a855f7]/5 rounded-full blur-[200px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[Space_Grotesk] mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[#9996a8] text-lg max-w-xl mx-auto mb-10">
            Have a project in mind? Let's create something amazing together.
          </p>

<div className="relative inline-flex flex-col items-center">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="glow-btn inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white hoverable"
            >
              <Mail size={18} />
              Get In Touch
              <Send size={16} />
            </button>
            {copyMessage && (
              <span className="mt-3 text-sm text-green-400">{copyMessage}</span>
            )}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <a
            href="mailto:wrmuakw@gmail.com"
            className="glow-card w-12 h-12 rounded-full flex items-center justify-center bg-[#12101c]/80 text-[#9996a8] hover:text-[#a855f7] hoverable transition-all duration-300"
            title="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/udani-wickramasinghe"
            target="_blank"
            rel="noreferrer noopener"
            className="glow-card w-12 h-12 rounded-full flex items-center justify-center bg-[#12101c]/80 text-[#9996a8] hover:text-[#a855f7] hoverable transition-all duration-300"
            title="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a
            href="https://www.instagram.com/udani_wickramasinghe?igsh=MTE3YXd3dXh1bHI4ZA=="
            target="_blank"
            rel="noreferrer noopener"
            className="glow-card w-12 h-12 rounded-full flex items-center justify-center bg-[#12101c]/80 text-[#9996a8] hover:text-[#a855f7] hoverable transition-all duration-300"
            title="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1e1b2e] to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#5c586e]">
          <p>
            © {new Date().getFullYear()} Udani Wickramasinghe. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-[#a855f7]" /> and creativity
          </p>
        </div>
      </div>
    </footer>
  );
}
