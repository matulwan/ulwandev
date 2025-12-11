'use client';
import { motion } from 'framer-motion';

// Icon Components defined inside the file
const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);


const PhoneIcon = () => (
  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-4 h-4 text-red-500 inline mx-1" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// Sub-components
const SocialLinks = () => (
  <>
    <a
      href="https://wa.me/60172052095?text=Hi%20Ulwan,%20I%20need%20a%20website"
      className="text-accent hover:text-white transition-colors duration-300"
    >
      <WhatsAppIcon />
    </a>
    <a
      href="mailto:ulwandev@gmail.com?subject=Website Inquiry"
      className="text-accent hover:text-white transition-colors duration-300"
    >
      <EmailIcon />
    </a>
    <a
      href="https://github.com/matulwan"
      className="text-accent hover:text-white transition-colors duration-300"
    >
      <GithubIcon />
    </a>

  </>
);

const ContactItem = ({ icon, content }: { icon: React.ReactNode; content: React.ReactNode }) => (
  <div className="flex items-center gap-3">
    {icon}
    {content}
  </div>
);

const QuickLinks = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true }}
  >
    <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
    <ul className="space-y-2">
      {['Home', 'About', 'Services', 'Projects'].map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-gray-400 hover:text-accent transition-colors"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </motion.div>
);

const ContactInfo = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <h3 className="text-xl font-bold mb-4 text-white">Get In Touch</h3>
    <div className="space-y-3">
      <ContactItem icon={<PhoneIcon />} content={<a href="tel:+60172052095" className="text-gray-400 hover:text-accent transition-colors">+60 17-205 2095</a>} />
      <ContactItem icon={<EmailIcon />} content={<a href="mailto:ulwandev@gmail.com" className="text-gray-400 hover:text-accent transition-colors">ulwandev@gmail.com</a>} />
      <ContactItem icon={<LocationIcon />} content={<span className="text-gray-400">Malaysia</span>} />
    </div>
  </motion.div>
);

const FooterBottom = ({ currentYear }: { currentYear: number }) => (
  <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
    <p className="text-gray-400 text-sm mb-4 md:mb-0">
      © {currentYear} – Ulwan Ukail. All rights reserved.
    </p>
    <p className="text-gray-500 text-sm">
      Made with <HeartIcon /> and lots of caffeine
    </p>
  </div>
);

// Main Footer Component
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-secondary-bg pt-16 pb-6 relative">
      {/* Background decoration - Green line separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Ulwan Ukail</h3>
            <p className="text-gray-400 mb-4">
              Fullstack Web Developer specializing in creating modern, responsive websites and web applications.
            </p>
            <div className="flex gap-4">
              <SocialLinks />
            </div>
          </motion.div>

          <QuickLinks />
          <ContactInfo />
        </div>

        <FooterBottom currentYear={currentYear} />
      </div>
    </footer>
  );
}