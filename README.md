[![npm](https://img.shields.io/npm/v/bunapi)](https://www.npmjs.com/package/bunapi)
[![npm](https://img.shields.io/npm/dt/bunapi)](https://www.npmjs.com/package/bunapi)
[![install size](https://packagephobia.com/badge?p=bunapi)](https://packagephobia.com/result?p=bunapi)

[![NPM](https://nodei.co/npm/bunapi.png)](https://nodei.co/npm/bunapi/)

# BunAPI

A simple image api

## Installation

```
npm i bunapi
```

## Type

| Function          | Type      |
| ----------------- | --------- |
| `meme`            | (png/jpg) |
| `girl`            | (png/jpg) |
| `boy`             | (png/jpg) |
| `cat`             | (png/jpg) |
| `dog`             | (png/jpg) |
| `hug`             | (gif)     |
| `smile`           | (gif)     |
| `baka`            | (gif)     |
| `bite`            | (gif)     |
| `clap`            | (gif)     |
| `dance`           | (gif)     |
| `die`             | (gif)     |
| `kill`            | (gif)     |
| `kiss`            | (gif)     |
| `wag`             | (gif)     |
| `poke`            | (gif)     |
| `punch`           | (gif)     |
| `sad`             | (gif)     |
| `run`             | (gif)     |
| `shot`            | (gif)     |
| `randomvid`       | (mp4)     |
| `anime-wallpaper` | (png/jpg) |
| `sgirl`           | (png/jpg) |

## Examples

Await/Async

```js
const bunapi = require("bunapi");
const image = new BunApi("ac62d46aa2d557839d1ec7c3a6f6eb"); //api key

(async () => {
  console.log(await image.meme());
})();
```

Return:

```js
{
    "author": "中村藍子#1204",
    "url": "https://media.discordapp.net/attachments/860374248275181598/860391071967215676/170408311_394610311891547_2511268824234698070_n.png"
}
```

## Contact us

Contact Hyhy#6895 for api key

<a  href="https://discord.gg/m28q56rkq6"><img  src="https://discord.com/api/guilds/815958968135319562/widget.png?style=banner1"></a>
