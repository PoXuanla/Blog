import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Nav() {
  const router = useRouter()
  const [active, setActive] = useState('')
  useEffect(() => {
    setActive(router.pathname)
  }, [router.pathname])
  return (
    <div className='fixed w-full flex justify-between items-center px-3 bg-secondary h-[60px] border-b-[2px] border-divider'>
      <Link
        href='/'
        className={`text-slate-400 font-bold ${active === '/' ? 'text-slate-200' : ''}`}
      >
        PX Blog
      </Link>
      <div className='flex gap-4'>
        <Link
          href='/posts'
          className={`text-slate-400 font-bold ${active === '/posts' ? 'text-slate-200' : ''}`}
        >
          All Posts
        </Link>
        <Link
          href='/categories'
          className={`text-slate-400 font-bold ${active === '/categories' ? 'text-slate-200' : ''}`}
        >
          Categories
        </Link>
      </div>
    </div>
  )
}
