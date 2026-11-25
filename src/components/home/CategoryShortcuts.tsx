import Link from 'next/link';
import { EXPERIENCES } from '@/data/experiences';
import { CATEGORIES } from '@/lib/categories';

const CategoryShortcuts = () => (
  <section aria-labelledby="categories-title" className="flex flex-col gap-4">
    <h2 id="categories-title" className="text-2xl font-semibold tracking-tight">
      ¿Qué te apetece vivir?
    </h2>
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {CATEGORIES.map(({ value, label, emoji }) => {
        const total = EXPERIENCES.filter((experience) => experience.category === value).length;
        return (
          <li key={value}>
            <Link
              href={`/experiences?category=${value.toLowerCase()}`}
              className="flex h-full flex-col gap-2 rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span aria-hidden className="text-3xl">{emoji}</span>
              <span className="font-semibold">{label}</span>
              <span className="text-sm text-stone-500">{total} experiencias</span>
            </Link>
          </li>
        );
      })}
    </ul>
  </section>
);

export default CategoryShortcuts;
