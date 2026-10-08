import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF0041] blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#FF0041]">
            Artista musical
          </p>

          <h1 className="text-7xl font-bold tracking-tighter text-white sm:text-8xl lg:text-9xl">
            TORRELLI
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#B8B8B8] sm:text-xl">
            Música, historias y momentos detrás de cada canción.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#music"
              className="rounded-full bg-[#FF0041] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#E6003A]"
            >
              Escuchar música
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
