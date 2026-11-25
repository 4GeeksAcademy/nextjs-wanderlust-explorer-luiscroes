import { Suspense } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Navbar = () => (
  <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/90 backdrop-blur">
    <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 md:px-8">
      <Logo />
      <Suspense fallback={<div className="h-9" />}>
        <NavLinks />
      </Suspense>
    </nav>
  </header>
);

export default Navbar;
