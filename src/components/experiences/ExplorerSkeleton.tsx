const ExplorerSkeleton = () => (
  <div role="status" aria-label="Cargando experiencias" className="flex animate-pulse flex-col gap-6">
    <div className="h-12 rounded-full bg-stone-200" />
    <div className="h-10 w-2/3 rounded-full bg-stone-200" />
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="aspect-[4/3] rounded-2xl bg-stone-200" />
      ))}
    </div>
  </div>
);

export default ExplorerSkeleton;
