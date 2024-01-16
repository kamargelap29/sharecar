# Share Car FE

Web revamp by [MicroAd Indonesia](https://microad.co.id/)

## Tech Stack

you need to know this version

```bash
node version: +16
yarn: 1.22.19
or
npm: latest
next: 12.1.5,
react: 17.0.2,
react-dom: 17.0.2,
```

1. [Typescript](https://www.typescriptlang.org/)
2. [Reactjs](https://reactjs.org/)
3. [NextJs](https://nextjs.org/)
4. [TailwindCSS](https://tailwindcss.com/)
5. [DaisyUi](https://daisyui.com/)
6. [headlessUi](https://headlessui.com/)
7. [leaflet](https://react-leaflet.js.org/)
8. [il8n](https://formatjs.io/)

## How To Run

make sure your `API` in `.env` file for dev and production, for client side NextJS have prefix word using `NEXT_PUBLIC` read here [Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

_example:_

```
NEXT_PUBLIC_URL=
NEXT_PUBLIC_APIURL=https://api-sharecar.staging.microad.co.id:444
NEXT_PUBLIC_GTM-ID=
```

_how to use_

```javascript
const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/blogs`);
const data = await res.json();
```

1. install yarn
   ```bash
   yarn install
   ```
2. Run `yarn dev` for development
   ```bash
   yarn dev
   ```
   _Deployment_ you also check this [docs](https://nextjs.org/docs/deployment), and **your deployment provider** guide!

## Project Structure

```bash
projectRoot
|-- blogs               // Default Markdown from NextJS
|-- @types              // Declare module for Typescript
|-- components          // UI Components
|-- hooks               // Utils UI Components
|-- lib
|   |-- data            // mock or dummy API
|   |-- fetcher.tsx     // action for fetching data
|   |-- gtm.ts          // gtm module
|   |-- meta.config.ts  // config file for meta site
|-- pages
|   |-- api             // custom server default from NextJs
|   |-- _app.tsx        ||
|   |-- _document.tsx   ||== Default files from NextJs
|   |-- 404.tsx         ||
|   |-- index.tsx       // Root pages as Homepage
|   |-- ... .tsx        // Add more pages automaticly include the page routing
|-- public
|   |-- assets          // local files like image etc
|-- locale              // Local MultiLang
|   |-- en.json
|   |-- id.json
|-- package.json
|-- .eslintrc.json
|-- babel.config.js     // Webpack for bundle ts files
|-- next.config.js      // Default file from Nextjs
|-- tailwind.config.js  // config file for tailwindcss
|-- tsconfig.json       // config file for typescript
```

### If you want to change static content

1. if you want to change static pages content, like a **terms and condition** you can change the component inside `pages/syarat-dan-ketentuan` page
2. Some files GET static data from local `.json` files, check `lib/data` folders
3. For dynamic pages like blog/news, at `pages/news` have 2 files **index.tsx** for default page of news and **[slug].tsx** for news detail page
4. `lib` folder for utilities this web app
5. if you want to update feature add some UI component please attach inside `components` folders
6. Add some translation in `locale` folder.
7. Replace Logo `public/assets/images` folder
8. Replace Logo Icon `public/favicon` and add edit `browserconfig.js` file and `site.webmanifest.json` file

## How to Build

You can testing `Production` in development mode.

please read this [docs](https://nextjs.org/docs/deployment)

```bash
yarn build
and
yarn start

// build info

Page                                       Size     First Load JS
┌ ○ /                                      13.9 kB         176 kB
├   /_app                                  0 B             158 kB
├ ○ /404                                   859 B           159 kB
├ λ /api/banners                           0 B             158 kB
├ ○ /cara-kerja-sharecar                   1.25 kB         159 kB
├ ○ /contact                               546 B           158 kB
├ ○ /faq                                   3.62 kB         161 kB
├ ● /harga                                 3.55 kB         166 kB
├ ○ /kebijakan-privasi                     2.02 kB         160 kB
├ ○ /kenapa-sharecar                       2.42 kB         160 kB
├ ○ /kontak-page                           680 B           158 kB
├ ○ /lokasi                                4.48 kB         167 kB
├ ● /news                                  1.75 kB         171 kB
├ ● /news/[slug] (2879 ms)                 1.59 kB         164 kB
├   ├ /id/news/nisi (743 ms)
├   ├ /id/news/sit (715 ms)
├   ├ /id/news/name-update (419 ms)
├   ├ /id/news/non (408 ms)
├   ├ /id/news/voluptate (392 ms)
├   └ /id/news/ea
├ ○ /peringatan                            639 B           158 kB
├ ○ /promo                                 3.86 kB         173 kB
├ ○ /syarat-dan-ketentuan                  5.44 kB         163 kB
└ ○ /test                                  2.74 kB         161 kB
+ First Load JS shared by all              158 kB
  ├ chunks/framework-5f4595e5518b5600.js   42 kB
  ├ chunks/main-fcfb4b3d3ebe616e.js        29.9 kB
  ├ chunks/pages/_app-212d15b4ee5a917f.js  84.2 kB
  ├ chunks/webpack-56476187c2fa72dc.js     1.61 kB
  └ css/e597ddb8a896dd32.css               14.4 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
```
