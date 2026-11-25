import type { Metadata } from 'next';
import { Suspense } from 'react';
import ExperienceExplorer from '@/components/experiences/ExperienceExplorer';
import ExplorerSkeleton from '@/components/experiences/ExplorerSkeleton';
import { EXPERIENCES } from '@/data/experiences';

export const metadata: Metadata = { title: 'Explorar experiencias · Wanderlust Explorer' };

const ExperiencesPage = () => (
  <section className="flex flex-col gap-6">
    <header>
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Explora experiencias</h1>
      <p className="mt-2 text-stone-600">
        {EXPERIENCES.length} planes únicos en todo el mundo. Busca, filtra y comparte el enlace con tu selección.
      </p>
    </header>
    {/* useSearchParams necesita un límite de Suspense */}
    <Suspense fallback={<ExplorerSkeleton />}>
      <ExperienceExplorer />
    </Suspense>
  </section>
);

export default ExperiencesPage;
