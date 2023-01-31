---
title: Routing
slug: next-routing
categories: 'NextJS'
date: '2022-11-09'
---

# Routing

**介紹切換頁面的方式**

1. `Link 組件`
2. `Injecting the router`

**幾種開發常用的特性**

1. `Use UrlObject`
2. `Dynamic route segment`
3. `shallow routing`

---

## 使用 < Link /> 組件

### Link 特性

如果導向 page 是 `SSG` 的話，在 `Initial phase` 會進行 prefetch

`SSR` 則只會在 `Link click()` 時才會 `fetch`

### Static routing

```jsx
<Link href='/posts/1'>Post 1</Link>
```

### Dynamic routing

`basic usage`

```jsx
let id = 2
<Link href='/posts/${id}'>{`Post ${id}`</Link>

let arr = [1,2,3,4]
const linkGroup = arr.map((item,index)=>{
	return <<Link href='/posts/${item}'>{`Post ${item}`</Link>
})
```

### Link other features

請參閱文件

`child is functional component`

`child is <a/> tag`

---

## Injecting the router

[https://nextjs.org/docs/api-reference/next/router](https://nextjs.org/docs/api-reference/next/router)

透過 `useRouter` 來跳轉頁面

好處是可以在跳轉前執行一些行為( call api、change state …)

```jsx
import { useRouter } from 'next/router'

const router = useRouter()

router.push('/posts/1')
```

---

## Use UrlObject

`<Link/> href` 及 `router.push()` 除了使用 `string` 外，也可使用 `UrlObject`

```jsx
interface UrlObject {
  auth?: string | null | undefined;
  hash?: string | null | undefined;
  host?: string | null | undefined;
  hostname?: string | null | undefined;
  href?: string | null | undefined;
  pathname?: string | null | undefined;
  protocol?: string | null | undefined;
  search?: string | null | undefined;
  slashes?: boolean | null | undefined;
  port?: string | number | null | undefined;
  query?: string | null | ParsedUrlQueryInput | undefined;
}
```

```jsx
<Link href={{ pathname: '/posts/1' }}>Link</Link>

router.push({ pathname: '/posts/1', replace: true })
```

---

## Dynamic route segment

使用 `[]` 包住 `URL` 的一部份稱為 `segment`

使用`UrlObject query` 對 `segment` 內容賦值

`Link`

```jsx
//input: posts/[name]/[id]
<Link
	href={{
		pathname:'posts/[name]/[id]',
		query: { name: 'books',id: 2 }
	}}
>

//input:  posts/[...date]
//output: posts/2022/10/12
const url = [2022,10,12]
<Link
	href={{
		pathname:'posts/[...date]',
		query: { date: url }
	}}
>
```

`router`

```jsx
router.push({
  pathname: '/post/[pid]',
  query: { pid: post.id }
})
```

---

## Shallow Routing

在當前頁面不經由 `getStaticProps` `getServerSideProps` 更改 `url queryString`

```jsx
//current page: /about

router.push('/about?count=10', undefined, { shallow: true })
<Link href="/about?counter=1" shallow> shallow </Link>
```

須注意 `href` 若不是當前路徑，則會套轉至新頁面，不會觸發 `shallow` 功能

```jsx
//current page: /about
router.push('posts?count=10', undefined, { shallow: true })
<Link href="/posts?counter=1" shallow> shallow </Link>
```
