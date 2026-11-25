import type { Metadata } from 'next';
import ProfileCard, { type MockUser } from '@/components/profile/ProfileCard';
import ProfileFavorites from '@/components/profile/ProfileFavorites';

export const metadata: Metadata = { title: 'Perfil · Wanderlust Explorer' };

const MOCK_USER: MockUser = {
  name: 'Lucía Martín',
  handle: 'lucia.viaja',
  location: 'Valencia, España',
  memberSince: 'marzo de 2024',
  bio: 'Coleccionista de atardeceres y mercados locales. Siempre con una mochila lista para la próxima escapada.',
};

const ProfilePage = () => (
  <div className="flex flex-col gap-6">
    <ProfileCard user={MOCK_USER} />
    <ProfileFavorites />
  </div>
);

export default ProfilePage;
