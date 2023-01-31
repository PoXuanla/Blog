import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import { getMarkdownSlugs } from '@/utils/mdHandler'
import rehypeHighlight from 'rehype-highlight'
import remarkBreaks from 'remark-breaks'

export default function Post({ source }) {
  return (
    <div className='max-w-[700px] w-full mx-auto p-3'>
      <MDXRemote {...source} />
    </div>
  )
}
export async function getStaticProps({ params }) {
  console.log(params)
  const source = (await fs.promises.readFile(`./markdown/${params.slug.join('/')}.md`)).toString()
  const mdxSource = await serialize(source, {
    // made available to the arguments of any custom mdx component
    scope: {},
    // MDX's available options, see the MDX docs for more info.
    // https://mdxjs.com/packages/mdx/#compilefile-options
    mdxOptions: {
      remarkPlugins: [remarkBreaks],
      rehypePlugins: [rehypeHighlight],
      format: 'md'
    },
    // Indicates whether or not to parse the frontmatter from the mdx source
    parseFrontmatter: true
  })
  return { props: { source: mdxSource } }
}
export async function getStaticPaths() {
  const location = getMarkdownSlugs()
  // const slugs = location.map((item) => {
  //   return item.split('/').pop()
  // })
  const paths = location.map((item, index) => {
    const slug = item.split('/')
    console.log(slug.join('/'))
    return {
      params: {
        slug
      }
    }
  })
  return {
    paths,
    fallback: false // can also be true or 'blocking'
  }
}
