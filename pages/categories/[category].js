import { getAllMarkdownsFrontMatter } from '@/utils/mdHandler'
import PostList from '@/components/postList'
import { useRouter } from 'next/router'

export default function Category({ posts, category }) {
  const router = useRouter()
  const lists = posts.map((item) => {
    return <PostList key={item.slug} post={item} />
  })
  const backTo = () => {
    router.back()
  }
  return (
    <>
      <header className='relative flex items-center justify-center w-full md:w-[53%] mx-auto mt-3 md:mt-5'>
        <button
          className='absolute top-50% left-1 rounded text-slate-400 px-3 py-1'
          onClick={backTo}
        >
         back
        </button>
        <h1 className='mx-auto bg-clip-text text-transparent text-[33px] font-bold bg-gradient-to-r from-rose-900 to-slate-400 cursor-default'>
          {category.toUpperCase()}
        </h1>
      </header>
      <hr className='border-0 h-[1px] bg-gradient-to-r from-gray-300 mt-1 mb-5 w-full md:w-[53%] mx-auto' />

      <div className=' mx-auto md:w-[500px] px-3'>
        <ul>{lists}</ul>
      </div>
    </>
  )
}
export async function getStaticProps({ params: { category } }) {
  const frontMatters = getAllMarkdownsFrontMatter()
  const posts = frontMatters.filter((frontMatter) => {
    return frontMatter.categories.toLowerCase() == category
  })
  return {
    props: {
      posts,
      category
    }
  }
}
export async function getStaticPaths() {
  const frontMatters = getAllMarkdownsFrontMatter()
  let categories = frontMatters.reduce((acc, frontMatter) => {
    acc.push(frontMatter.categories)
    return acc
  }, [])
  categories = [...new Set(categories)]
  const paths = categories.map((category) => {
    return {
      params: {
        category: category.toLowerCase()
      }
    }
  })
  return {
    paths,
    fallback: false // can also be true or 'blocking'
  }
}
