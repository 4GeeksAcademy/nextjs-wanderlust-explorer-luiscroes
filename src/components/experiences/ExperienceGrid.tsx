import type { Experience } from '@/types/experience';
import ExperienceCard from './ExperienceCard';

interface ExperienceGridProps {
  experiences: Experience[];
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
}

const ExperienceGrid = ({ experiences, favoriteIds, onToggleFavorite }: ExperienceGridProps) => (
  <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {experiences.map((experience, index) => (
      <li key={experience.id}>
        <ExperienceCard
          experience={experience}
          isFavorite={favoriteIds.includes(experience.id)}
          onToggleFavorite={onToggleFavorite}
          priority={index < 4}
        />
      </li>
    ))}
  </ul>
);

export default ExperienceGrid;
