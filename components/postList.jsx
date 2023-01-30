import Link from 'next/link'

export default function PostList({ post, className }) {
  return (
    <li
      className={`w-full p-3 rounded hover:bg-hover-primary transition-all duration-200 ${className}`}
    >
      <Link href={`/posts/${post.slug}`}>
        <h3 className='text-gray-300 hover:text-gray-200 text-xl font-bold tracking-wide whitespace-nowrap overflow-hidden text-ellipsis '>
          {post.title}
        </h3>
      </Link>
      <div className='flex justify-between items-center mt-2'>
        <CategoryTag>{post.categories}</CategoryTag>
        <span className='text-gray-400 text-xs md:text-base'>{post.date}</span>
      </div>
    </li>
  )
}
export function CategoryTag({ children }) {
  return (
    <Link
      href={`/categories/${children.toLowerCase()}`}
      className='p-2 rounded bg-secondary text-gray-400 font-bold text-sm'
    >
      {children}
    </Link>
  )
}
