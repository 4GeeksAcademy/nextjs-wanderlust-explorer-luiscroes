import Link from 'next/link';
import EmptyState from '@/components/experiences/EmptyState';

const NotFound = () => (
  <EmptyState title="Página no encontrada" message="La experiencia o página que buscas no existe.">
    <Link href="/experiences" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white">
      Ir al explorador
    </Link>
  </EmptyState>
);

export default NotFound;
