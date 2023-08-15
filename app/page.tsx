import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
export default function Home() {
  return (
    <main>
      <h1>Threads</h1>
      <UserButton />
    </main>
  )
}
