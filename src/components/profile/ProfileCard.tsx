export interface MockUser {
  name: string;
  handle: string;
  location: string;
  memberSince: string;
  bio: string;
}

const ProfileCard = ({ user }: { user: MockUser }) => {
  const initials = user.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <section className="flex flex-col items-center gap-4 rounded-3xl border border-stone-200 bg-white p-8 text-center md:flex-row md:text-left">
      <div aria-hidden className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orange-500 to-teal-500 text-3xl font-semibold text-white">
        {initials}
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">{user.name}</h1>
        <p className="text-stone-500">
          @{user.handle} · {user.location}
        </p>
        <p className="mt-2 max-w-xl text-stone-700">{user.bio}</p>
        <p className="text-sm text-stone-500">Miembro desde {user.memberSince}</p>
      </div>
    </section>
  );
};

export default ProfileCard;
