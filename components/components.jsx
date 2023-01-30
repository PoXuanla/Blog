const h1 = ({ children }) => {
  return (
    <h1 className='mb-5 text-center'>
      <span className='bg-rose-900 font-bold text-[30px] text-white'>{children}</span>
    </h1>
  )
}
const h2 = ({ children }) => {
  return (
    <h1 className='mt-5 mb-2'>
      <span className=' font-bold text-[30px] text-white'>{children}</span>
    </h1>
  )
}
const h3 = ({ children }) => {
  return (
    <h1 className='mb-2'>
      <span className=' font-bold text-[22px] text-white'>{children}</span>
    </h1>
  )
}
const p = ({ children }) => {
  return <p className='text-white'>{children}</p>
}
const ol = ({ children }) => {
  return <ol className='text-white list-decimal ml-[20px] font-extrabold'>{children}</ol>
}
const ul = ({ children }) => {
  return <ul className='text-white list-disc ml-[20px] font-extrabold my-3'>{children}</ul>
}
const li = ({ children }) => {
  return (
    <li className='mb-[4px]'>
      <span className='rounded px-2 py-1'>{children}</span>
    </li>
  )
}
const hr = ({ children }) => {
  return <hr className='opacity-25 bg-white my-7'></hr>
}
const em = ({ children }) => {
  return <em>{children}</em>
}
const strong = ({ children }) => {
  return (
    <strong className='bg-rose-900 bg-opacity-70 text-white px-2 py-1 rounded'>{children}</strong>
  )
}
const a = ({ href, children }) => {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' className='text-blue-600 px-1'>
      {children}
    </a>
  )
}
const components = {
  h1,
  h2,
  h3,
  p,
  ol,
  ul,
  li,
  hr,
  a,
  strong,
  em
}
export default components
