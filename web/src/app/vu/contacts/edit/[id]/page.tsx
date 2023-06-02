'use client';

import { usePathname } from 'next/navigation';

export default function Page() {
  const router = usePathname();
  const id = router?.split('/').pop()
  return <p>Post: {id}</p>;
}
