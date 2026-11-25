import CategoryShortcuts from '@/components/home/CategoryShortcuts';
import Hero from '@/components/home/Hero';

const HomePage = () => (
  <div className="flex flex-col gap-12">
    <Hero />
    <CategoryShortcuts />
  </div>
);

export default HomePage;
