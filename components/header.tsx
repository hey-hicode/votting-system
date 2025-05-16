import { Trophy,} from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="sticky  top-0 z-10 border-b bg-background/95 backdrop-blur">
    <div className="container  mx-auto  flex h-16 items-center justify-between">
      <div className="flex items-center gap-2 font-bold">
        <Trophy className="h-5 w-5 text-primary" />
        <span>LAUTECH Awards</span>
      </div>
      <nav className="hidden md:flex gap-6">
        <Link href="/" className="text-sm font-medium">
          Home
        </Link>
        <Link href="/categories" className="text-sm font-medium">
          Categories
        </Link>
        <Link href="/results" className="text-sm font-medium">
          Results
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <Link href="/login">
          <Button variant="outline" size="sm">
            Login
          </Button>
        </Link>
        <Link href="/register">
          <Button size="sm">Register</Button>
        </Link>
      </div>
    </div>
  </header>
  )
}

export default Header