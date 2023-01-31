---
title: regexp-capturing-group
slug: regexp-capturing-group
categories: 'Regex'
date: '2022-11-09'
---

# Regexp Capturing group

在 Regexp 的 pattern 中，可以使用 `()`包住指定字元，使其變為 subexpression 或稱 group 。

`用途 :`

1. 使用 capturing group 查找
2. 使用 capturing group 取得 regex result 的一部分資料
3. Backreference
4. name capturing group
5. Non-Capturing group with ?:

---

### 使用 capturing group 查找

在 capturing group 後面使用 quantifier 會作用於 capturing group 內的字串。

```jsx
let string = 'Gogogo John'
let regex = /(go)+\sJohn/i

let result = string.match(regex)

console.log(result[0]) //Gogogo John
console.log(result[1]) //go
```

---

### 使用 capturing group 取得 regex result 的一部分資料

### 沒使用 capturing

使用 exec() 會回傳符合 regexp 的 string 以及 start index。

```jsx
let match = /ello \S+.*abc/g.exec('This is a hello world hello abc!');

console.log(match)
[
	0: "ello world hello abc"
	groups: undefined
	index: 11
	input: "This is a hello world hello abc!"
]
```

### 使用 capturing group

使用 `d` flag，在 exec() result 會多一個 `indices`紀錄每一筆 result 的 start & end index。

result[0] 會固定輸出沒有 capturing group 時的字串。

result [1] 跟 result [2] 為使用 capturing group 的資料。

```jsx
let match = /(hello +).*(abc)/dg.exec('This is a hello world hello abc!');

console.log(match)
[
	0: "hello world hello abc"
	1: "hello world" //first capturing group
	2: "abc" // second capturing group
	groups: undefined
	index: 10
  indices:
		Array(3)
		0: (2) [10, 31]
		1: (2) [10, 21]
		2: (2) [28, 31]
	input: "The Quick Brown Fox Jumps Over The Lazy Dog"
]
```

---

### Backreference

使用 \1 、\2 的方式引用 Capturing group。

使用相同的 capturing group 但不會再額外產生新的 capturing group result。

```jsx
var match = /(hello) \1/dg.exec('This is a hello hello abc!');

console.log(match)

[
	0: "hello hello"
	1: "hello" //只有一筆 capturing group result
	groups: undefined
	index:10
	indices: Array(2)
		0: (2) [10, 21]
		1: (2) [10, 15]
	groups: undefined
	input: "This is a hello hello abc!"
]
```

---

### Named captured group

幫 capturign group 命名，方便後續使用。

使用方法 : `(?<name> regexString... )`

```jsx
let match = /(?<year>\d{4})-(?<days>\d{2})-(?<month>\d{2})/.exec('2019-28-02')

console.log(match)

[
	0: "2019-28-02"
	1: "2019"
	2: "28"
	3: "02"
	groups: {year: '2019', days: '28', month: '02'}
	index: 0
	input: "2019-28-02"
]

console.log(match.groups.year) // '2019'
```

**Name backreference**

使用 `\k<name>` 的方式引用 capturing group

```jsx
let match = /(?<year>\d{4})-(?<days>\d{2})-(?<month>\d{2}).* \k<year>/.exec(
  '2019-28-02 year is 2019'
)
```

## 參考資源
1. [Capturing groups](https://javascript.info/regexp-groups)
