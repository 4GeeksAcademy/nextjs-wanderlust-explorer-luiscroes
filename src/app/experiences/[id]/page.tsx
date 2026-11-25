import { notFound } from 'next/navigation';
import ExperienceDetail from '@/components/experiences/ExperienceDetail';
import { EXPERIENCES } from '@/data/experiences';
import { getExperienceById } from '@/lib/experiences';

// Prerenderiza las 100 páginas de detalle en el build.
export const generateStaticParams = () => EXPERIENCES.map(({ id }) => ({ id }));

const ExperiencePage = async ({ params }: PageProps<'/experiences/[id]'>) => {
  const { id } = await params;
  const experience = getExperienceById(id);
  if (!experience) notFound();

  return <ExperienceDetail experience={experience} />;
};

export default ExperiencePage;
