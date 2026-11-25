import { getCategoryOption } from '@/lib/categories';
import type { Category } from '@/types/experience';

const CategoryTag = ({ category }: { category: Category }) => {
  const { emoji, label } = getCategoryOption(category);
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-700">
      <span aria-hidden>{emoji}</span>
      {label}
    </span>
  );
};

export default CategoryTag;
