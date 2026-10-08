type SpotifyEmbedProps = {
  url: string;
  title?: string;
};

export default function SpotifyEmbed({
  url,
  title = "Spotify player",
}: SpotifyEmbedProps) {
  const embedUrl = url.replace("open.spotify.com/", "open.spotify.com/embed/");

  return (
    <iframe
      src={embedUrl}
      title={title}
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      className="h-[370px] w-full rounded-xl border-0"
    />
  );
}
