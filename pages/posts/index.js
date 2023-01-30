import PostList from '@/components/postList'
import { getAllMarkdownsFrontMatter } from '@/utils/mdHandler'

export default function AllPosts({ posts }) {
  const lists = posts.map((item) => {
    return <PostList key={item.slug} post={item} className='mb-2' />
  })
  return (
    <div className=' mx-auto md:w-[500px] px-3 mt-3 md:mt-5'>
      <ul>{lists}</ul>
    </div>
  )
}

export async function getStaticProps() {
  const frontMatters = getAllMarkdownsFrontMatter()
  frontMatters.sort((a, b) => new Date(b.date) - new Date(a.date))

  return { props: { posts: frontMatters } }
}
