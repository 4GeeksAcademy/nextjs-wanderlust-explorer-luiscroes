interface EmptyStateProps {
  title: string;
  message: string;
  children?: React.ReactNode;
}

const EmptyState = ({ title, message, children }: EmptyStateProps) => (
  <div role="status" className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
    <span aria-hidden className="text-4xl">🔭</span>
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="max-w-sm text-stone-600">{message}</p>
    {children}
  </div>
);

export default EmptyState;
