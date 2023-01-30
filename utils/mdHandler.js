import glob from 'glob'
import fs from 'fs'
import matter from 'gray-matter'

export const getMarkdownSlugs = () => {
  const markdowns = getAllMarkdownsSrc()

  return markdowns.map((location) => {
    return location.split('/').pop().split('.').shift()
  })
}
export const getAllMarkdownsFrontMatter = () => {
  const markdowns = getAllMarkdownsSrc()

  return markdowns.map((md) => {
    const sources = fs.readFileSync(md).toString()
    return matter(sources).data
  })
}
export const getAllMarkdownsSrc = () => {
  return glob.sync('./markdown/*.mdx')
}
