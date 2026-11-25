'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useFavorites } from '@/context/FavoritesContext';

const LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/experiences', label: 'Explorar' },
  { href: '/favorites', label: 'Favoritos' },
  { href: '/profile', label: 'Perfil' },
];

const isActiveLink = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

const NavLinks = () => {
  const pathname = usePathname();
  const { favoriteIds } = useFavorites();

  return (
    <ul className="flex items-center gap-0.5 text-sm sm:gap-1">
      {LINKS.map(({ href, label }) => {
        const isActive = isActiveLink(pathname, href);
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={isActive ? 'page' : undefined}
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-2 transition-colors sm:px-3 ${
                isActive ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
              }`}
            >
              {label}
              {href === '/favorites' && favoriteIds.length > 0 && (
                <span className="rounded-full bg-orange-600 px-1.5 text-xs font-semibold text-white">
                  {favoriteIds.length}
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
