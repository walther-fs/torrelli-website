import SpotifyEmbed from "@/components/music/SpotifyEmbed";

export default function Spotify() {
  return (
    <section id="music" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red">
            Último lanzamiento
          </p>

          <p className="mx-auto mt-6 font-bold max-w-2xl text-lg leading-8 text-white/90">
            Descubre la música de TORRELLI directamente en Spotify.
          </p>
        </div>

        <div className="rounded-2xl border border-[#2A2A2A] bg-[#171717] p-2">
          <SpotifyEmbed
            url="https://open.spotify.com/artist/4rLdLznQGtEvN58hvkJXH4?si=bdrgcyB7Q--bqP5KsgPbBw"
            title="Último lanzamiento de TORRELLI en Spotify"
          />
        </div>
      </div>
    </section>
  );
}
