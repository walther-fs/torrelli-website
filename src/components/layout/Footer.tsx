export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#050505]/50 backdrop-blur-sm px-6 py-8 text-center">
      <p className="text-sm text-white/80">
        © {new Date().getFullYear()} TORRELLI. Todos los derechos reservados.
      </p>
    </footer>
  );
}
