"use client";
import {
  Mail,
  Facebook,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import {FooterBackgroundGradient} from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";

function Footer() {
  // Footer link data
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Pricing", href: "/pricing", isRoute: true },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "For Agents", href: "/agents", isRoute: true },
        { label: "For Brokerages", href: "/brokerages", isRoute: true },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about", isRoute: true },
        { label: "Blog", href: "/blog", isRoute: true },
        { label: "Contact", href: "/contact", isRoute: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy", isRoute: true },
        { label: "Terms of Service", href: "/terms", isRoute: true },
        { label: "Cookie Policy", href: "/cookies", isRoute: true },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#9DBFBF]" aria-hidden="true" />,
      text: "ct@contre.ai",
      href: "mailto:ct@contre.ai",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Facebook size={20} aria-hidden="true" />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61580148100130" },
    { icon: <Linkedin size={20} aria-hidden="true" />, label: "LinkedIn", href: "https://www.linkedin.com/company/contre-ai/" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0D1A14] to-[#112A1E] relative h-fit overflow-hidden border-t border-white/[0.08] text-slate-400 font-manrope">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 lg:gap-12 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#9DBFBF] text-3xl font-bold font-bebas">
                Contre
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering real estate professionals with modern tools and insights.
            </p>

            {/* Contact info inline with brand */}
            <div className="pt-4 space-y-3">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#9DBFBF] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#9DBFBF] transition-colors">
                      {item.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-bold mb-6 font-bebas tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link
                        href={link.href}
                        className="hover:text-[#9DBFBF] hover:translate-x-1 transition-all duration-200 inline-block"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="hover:text-[#9DBFBF] hover:translate-x-1 transition-all duration-200 inline-block"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-t border-white/[0.08] my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-slate-500">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#9DBFBF] hover:scale-110 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Contre. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="Contre" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default Footer;
