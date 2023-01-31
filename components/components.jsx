const h1 = ({ children }) => {
  return (
    <h1 className='mb-5 text-center'>
      <span className='bg-rose-900 font-bold text-[30px] text-slate-200	'>{children}</span>
    </h1>
  )
}
const h2 = ({ children }) => {
  return (
    <h2 className='mt-5 mb-2'>
      <span className=' font-bold text-[30px] text-slate-200	'>{children}</span>
    </h2>
  )
}
const h3 = ({ children }) => {
  return (
    <h3 className='my-2'>
      <span className=' font-bold text-[22px] text-slate-200'>{children}</span>
    </h3>
  )
}
const p = ({ children }) => {
  return <p className='text-slate-200 my-1'>{children}</p>
}
const pre = ({ children }) => {
  return <pre className='my-3 rounded overflow-hidden'>{children}</pre>
}
const ol = ({ children }) => {
  return <ol className='text-slate-200 list-decimal ml-[20px] font-extrabold'>{children}</ol>
}
const ul = ({ children }) => {
  return <ul className='text-slate-200 list-disc ml-[20px] font-extrabold my-3'>{children}</ul>
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
    <strong className='bg-neutral-800	 bg-opacity-60 text-red-600 text-sm font-bold  px-[4px] py-[3px] 	rounded'>
      {children}
    </strong>
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
  em,
  pre
}
export default components
