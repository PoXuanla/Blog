import { getAllMarkdownsFrontMatter } from '@/utils/mdHandler'
import Link from 'next/link'

export default function Categories({ categories }) {
  const lists = Object.entries(categories).map((category) => {
    const [tag, count] = category

    return (
      <li
        key={tag}
        className='text-center text-gray-300 hover:text-gray-200 text-xl font-bold mb-3'
      >
        <Link href={`/categories/${tag.toLowerCase()}`}>{`${tag}  -  ${count}篇`}</Link>
      </li>
    )
  })
  return (
    <div className='mt-3 md:mt-5'>
      <ul>{lists}</ul>
    </div>
  )
}
export async function getStaticProps() {
  const frontMatters = getAllMarkdownsFrontMatter()
  let categories = frontMatters.reduce((acc, frontMatter) => {
    acc[frontMatter.categories] = (acc[frontMatter.categories] || 0) + 1
    return acc
  }, {})
  return { props: { categories } }
}
