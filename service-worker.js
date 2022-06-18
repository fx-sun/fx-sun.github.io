/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d2d527558eb3420478a3b021759702d0"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.8caccf73.js",
    "revision": "a5ccc1ee114b38d98965cf28f7c8a4f0"
  },
  {
    "url": "assets/js/10.33f76f26.js",
    "revision": "220f65ea638281da19c0b0a7cdd4a305"
  },
  {
    "url": "assets/js/11.25089477.js",
    "revision": "4ef4bceb3f3fbc91dbae4f1f03563e71"
  },
  {
    "url": "assets/js/12.e27bd8a3.js",
    "revision": "d4b9c17cf52793adf90c8fb3af72e8d9"
  },
  {
    "url": "assets/js/13.9422b4fc.js",
    "revision": "db1d989744ef17f4d6e062658e9f4508"
  },
  {
    "url": "assets/js/14.795a1ecc.js",
    "revision": "fadbf5bb18a68e25d3e4ad57655eb146"
  },
  {
    "url": "assets/js/15.41fe2964.js",
    "revision": "9863f58c41c163631ebc704933b8902a"
  },
  {
    "url": "assets/js/16.7f11be97.js",
    "revision": "ba3010d9662bb74f485e8fbe736c5863"
  },
  {
    "url": "assets/js/17.51d35a3e.js",
    "revision": "55481fc8883194f5debcff1a4647ed4a"
  },
  {
    "url": "assets/js/18.4d4ff185.js",
    "revision": "754216920826e2387c870b25e8a74898"
  },
  {
    "url": "assets/js/4.e4147e0b.js",
    "revision": "c026ea6cc971d554f4321bf7de725e62"
  },
  {
    "url": "assets/js/5.5a448dee.js",
    "revision": "9b9cb82a6d53d3683a2ebbff85546d54"
  },
  {
    "url": "assets/js/6.d2422d23.js",
    "revision": "f18fd80e5f56592edbe12939cb258275"
  },
  {
    "url": "assets/js/7.d51dfeed.js",
    "revision": "0c87ed99af5b16be211472c8f40f98cd"
  },
  {
    "url": "assets/js/8.c32581b2.js",
    "revision": "75bbb0b04f31e38bddf06c1e7f804ec4"
  },
  {
    "url": "assets/js/9.e3ab4b27.js",
    "revision": "191efa8a41a08a4cb0bcebed53f83171"
  },
  {
    "url": "assets/js/app.1d7c01bb.js",
    "revision": "b71531ceb94c56b000351663694e5336"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.c6937b0c.js",
    "revision": "81ef84d370addbda5a2e08aa6861f5f8"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "b75a3150d561941b0561b8f99a17ed79"
  },
  {
    "url": "categories/java/index.html",
    "revision": "14a3feb8d4837e0571f860e25cad8b1b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c4ba2ce530b5f08ef77c80e8b1625870"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "339d28d843f9cbe7206befb5d2259f5c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "04712676f5c40bf13ab6c17741c8e841"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "4039530c185300ca72ce9be76d987b24"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "cc383168e801f6855532311ae105c1c2"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "e45b67d8f68e4ee4ea0830bccbded447"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "891dbf33fb7db8a3a25b571c782fe5dc"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "54dfc5df1980d67ddc597d395512da1f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "bae72dc0f167b056e2245f49d36a97f5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "ece07b85cddf297dd34fb358247924eb"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "431e7996a258c53b77c9b97390012da4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a07e0e944410965fc90046f9c967d2f3"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "249e669db9c8d3069727d19034b9aa1e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "80981215a0761bc13fc375eb062d1f2f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "9ed65803addd00200ee6d5444206fa40"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "9905b56e87d279e3e537252b17cb9631"
  },
  {
    "url": "timeline/index.html",
    "revision": "ba93ac4a2cb529731a70bf30ad526746"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1d7ef2e04fd817006d9dda387d2f3506"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "bef0f02bcfa317046b844d9f272dc294"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "25b6bd90d836524dd07531b76a33acf7"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "3e152dd30ce42e3b2994880a7b7a10ce"
  },
  {
    "url": "生活分享/life.html",
    "revision": "faffc63ab73f61749d00b33bbc8e0b15"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
