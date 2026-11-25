import Link from 'next/link';

const Logo = () => (
  <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold tracking-tight text-stone-900">
    <span aria-hidden className="grid h-8 w-8 place-items-center rounded-full bg-orange-600 text-white">
      🧭
    </span>
    <span className="hidden sm:inline">Wanderlust</span>
  </Link>
);

export default Logo;
