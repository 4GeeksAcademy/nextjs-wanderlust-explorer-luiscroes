import Link from 'next/link';
import { CATEGORIES } from '@/lib/categories';
import type { Experience } from '@/types/experience';

const FavoritesSummary = ({ favorites }: { favorites: Experience[] }) => (
  <section aria-labelledby="summary-title" className="rounded-3xl border border-stone-200 bg-white p-8">
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 id="summary-title" className="text-sm font-medium uppercase tracking-widest text-stone-500">
          Favoritos guardados
        </h2>
        <p className="text-5xl font-semibold">{favorites.length}</p>
      </div>
      <Link href="/favorites" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium hover:border-stone-900">
        Ver mis favoritos
      </Link>
    </div>
    <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
      {CATEGORIES.map(({ value, label, emoji }) => (
        <li key={value} className="rounded-2xl bg-stone-50 p-4">
          <span aria-hidden>{emoji}</span>
          <p className="text-sm text-stone-600">{label}</p>
          <p className="text-xl font-semibold">{favorites.filter((favorite) => favorite.category === value).length}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default FavoritesSummary;
