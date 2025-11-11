"use client";
import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import {FooterBackgroundGradient} from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";

function Footer() {
  // Footer link data
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Integrations", href: "#integrations" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "For Agents", href: "/agents", isRoute: true },
        { label: "For Brokerages", href: "/brokerages", isRoute: true },
        { label: "Enterprise", href: "#enterprise" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Cookie Policy", href: "#cookies" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#9DBFBF]" />,
      text: "ct@contre.ai",
      href: "mailto:ct@contre.ai",
    },
    {
      icon: <MapPin size={18} className="text-[#9DBFBF]" />,
      text: "Coeur d'Alene, ID",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-[#37474F] relative h-fit rounded-3xl overflow-hidden m-8 text-gray-300 font-['Manrope']">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 lg:gap-12 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#607D3B] text-3xl font-bold font-['Bebas_Neue']">
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
                      className="hover:text-[#3ca2fa] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#3ca2fa] transition-colors">
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
              <h4 className="text-white text-lg font-bold mb-6 font-['Bebas_Neue'] tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="hover:text-[#3ca2fa] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="hover:text-[#3ca2fa] transition-colors"
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

        <hr className="border-t border-gray-600 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#3ca2fa] transition-colors"
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
