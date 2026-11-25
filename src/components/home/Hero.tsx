import Link from 'next/link';

const Hero = () => (
  <section className="relative overflow-hidden rounded-3xl bg-stone-900 px-6 py-16 text-white md:px-12 md:py-24">
    <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-600/40 blur-3xl" />
    <div aria-hidden className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-teal-500/30 blur-3xl" />
    <div className="relative flex max-w-2xl flex-col gap-6">
      <p className="text-sm font-medium uppercase tracking-widest text-orange-300">Wanderlust Labs</p>
      <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
        Experiencias que no caben en una guía de viaje
      </h1>
      <p className="text-lg text-stone-300">
        Desde tours gastronómicos en Bangkok hasta rutas de vela por el Adriático. Descubre, filtra y guarda tus
        favoritas.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/experiences" className="rounded-full bg-orange-600 px-6 py-3 font-semibold transition-colors hover:bg-orange-500">
          Explorar experiencias
        </Link>
        <Link
          href="/experiences?search=vela&category=adventure&destination=Croatia"
          className="rounded-full border border-white/30 px-6 py-3 font-semibold transition-colors hover:bg-white/10"
        >
          ⛵ Vela en Croacia
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
