# scenicspot

串接交通部觀光景點 API [MOTC Transport API V2](https://ptx.transportdata.tw/MOTC?t=Tourism&v=2)

- 全部景點查詢
    - route為`/scenicSpot`
    - 串接 [get /v2/Tourism/ScenicSpot]()
        - 一次取得30個
        - 網頁滑到底再載入額外30個景點，直到沒有更多
- 縣市景點查詢
    - route為`/scenicSpot/{City}`
    - 串接 [GET /v2/Tourism/ScenicSpot/{City}]()
        - 一次取得30個
        - 網頁滑到底再載入額外30個景點，直到沒有更多
- 切換頁面按鈕
    - 所有頁面切換至全部景點查詢及縣市景點查詢
    - 使用navbar達成
架設在Netlify上 https://elated-lamarr-67db74.netlify.app/#/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
