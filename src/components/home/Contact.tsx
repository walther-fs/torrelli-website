export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
            Contacto
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Hablemos
          </h2>

          <p className="mt-6 text-lg leading-8 text-silver">
            ¿Tienes una propuesta, colaboración o consulta? Ponte en contacto
            con TORRELLI.
          </p>
        </div>

        <form className="mt-12 max-w-2xl space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-white"
            >
              Nombre
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre"
              className="w-full border-b border-gray-border bg-transparent px-0 py-3 text-white outline-none transition-colors placeholder:text-gray focus:border-red"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-white"
            >
              Correo electrónico
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              className="w-full border-b border-gray-border bg-transparent px-0 py-3 text-white outline-none transition-colors placeholder:text-gray focus:border-red"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-white"
            >
              Mensaje
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Escribe tu mensaje..."
              className="w-full resize-none border-b border-gray-border bg-transparent px-0 py-3 text-white outline-none transition-colors placeholder:text-gray focus:border-red"
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-red px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-red/90"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
