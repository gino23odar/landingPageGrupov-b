import React from 'react';
import { createClient } from '@/prismicio';

import NavBar from '@/components/NavBar';

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings")

  return (
    <div>
      <NavBar settings={settings}/>
    </div>
  )
}
