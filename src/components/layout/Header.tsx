import Link from "next/link";

const navigation = [
  { label: "Sobre mí", href: "#about" },
  { label: "Galería", href: "#gallery" },
  { label: "Noticias", href: "#news" },
  { label: "Contacto", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2A2A2A] backdrop-blur-sm">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="text-2xl font-bold tracking-[0.2em] text-white transition-colors hover:text-[#FF0041]"
        >
          TORRELLI
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md font-medium text-[#FF0041] transition-colors hover:text-[#B8B8B8]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href="https://distrokid.com/hyperfollow/torrelli/aa?fbclid=PAdGRleANxo0JleHRuA2FlbQIxMQABpz6yZ45S-cAgVkd2ZUMqsYrI2N7nCm1Sh_iTIMs3fhIOk7ezpeNoBsCStLDx_aem_JqR06mtBWhCRim1GCoOoXA"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#FF0041] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#E6003A] md:inline-flex"
        >
          Plataformas
        </a>
      </nav>
    </header>
  );
}
