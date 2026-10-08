import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { artist } from "@/data/artist";

const socialLinks = [
  {
    label: "Facebook",
    href: artist.social.facebook,
    icon: FaFacebook,
  },
  {
    label: "YouTube",
    href: artist.social.youtube,
    icon: FaYoutube,
  },
  {
    label: "Instagram",
    href: artist.social.instagram,
    icon: FaInstagram,
  },
  {
    label: "Tiktok",
    href: artist.social.tiktok,
    icon: FaTiktok,
  },
];

export default function Sidebar() {
  return (
    <aside
      className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 md:block"
      aria-label="Redes sociales"
    >
      <nav className="flex flex-col items-center gap-5 rounded-r-xl border border-l-0 border-gray-border bg-black/30 px-3 py-5 backdrop-blur-md">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-silver transition-colors hover:text-red"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </nav>
    </aside>
  );
}
