import { SOCIAL_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-2xl font-display font-bold text-gradient">
            AK.
          </div>
          
          <div className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} Ankit Kourav. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
