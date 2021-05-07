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
    "revision": "6bf6fcb2c1af25b43f3181338b90c2eb"
  },
  {
    "url": "about/index.html",
    "revision": "c251165eb641c6d5bd0110efbd0ed37d"
  },
  {
    "url": "assets/css/0.styles.1ccd64bc.css",
    "revision": "891816eb6b25659a21df9c27b901ef5e"
  },
  {
    "url": "assets/js/1.eb6ee268.js",
    "revision": "a72ec0e9087672a4eb2422b2560ca1ea"
  },
  {
    "url": "assets/js/10.a23b8483.js",
    "revision": "c597626c166eae77832b745f09d7c168"
  },
  {
    "url": "assets/js/11.9c68c651.js",
    "revision": "f3a1ae8f37057903712db90545c13361"
  },
  {
    "url": "assets/js/12.653adad5.js",
    "revision": "1dc543bb7e535233127249dc9c6ba176"
  },
  {
    "url": "assets/js/13.8e087b2b.js",
    "revision": "5957ac1a6086e7b6a32073448c9b9ad8"
  },
  {
    "url": "assets/js/14.8ad9e9c8.js",
    "revision": "03cd11618126aae734a7400552ec0d3a"
  },
  {
    "url": "assets/js/15.e6755f0d.js",
    "revision": "610a2316f140379a3a8aedf8eed5d384"
  },
  {
    "url": "assets/js/16.d1ca8577.js",
    "revision": "a8f3a433a1c3006de98f4fb0b26ea975"
  },
  {
    "url": "assets/js/17.22ac6ee6.js",
    "revision": "e3b84f491647cd32a60d28a51460c74b"
  },
  {
    "url": "assets/js/18.ac0dd185.js",
    "revision": "140fef2a3f130f954167ee7a9b35dd49"
  },
  {
    "url": "assets/js/19.c387db92.js",
    "revision": "dd4b88475a2a6efd0cdb6b55ca5357ce"
  },
  {
    "url": "assets/js/2.ce9e873a.js",
    "revision": "2e71a9694efefc58e05e78b69d5e6e81"
  },
  {
    "url": "assets/js/20.17d90398.js",
    "revision": "971cd3d83bec5081e8af31452265471f"
  },
  {
    "url": "assets/js/21.11a5120d.js",
    "revision": "da63e68ebd2861bd1f30b56b3643c245"
  },
  {
    "url": "assets/js/22.513aff29.js",
    "revision": "301d3908ac1405fcd4952538044faf04"
  },
  {
    "url": "assets/js/23.bcef44ee.js",
    "revision": "a78addef1c8fab46d9530afda502f60c"
  },
  {
    "url": "assets/js/24.0c4c6aa6.js",
    "revision": "c73572e75d6d334cb173868bc1a00eac"
  },
  {
    "url": "assets/js/25.43034f75.js",
    "revision": "92de01ea4048a21682a8a9ab572bc3e6"
  },
  {
    "url": "assets/js/26.f728fab8.js",
    "revision": "2b6f26f498afd7c59a26a5cc53341412"
  },
  {
    "url": "assets/js/27.6abfe71e.js",
    "revision": "ecc5de89004151825da5bc6da9058149"
  },
  {
    "url": "assets/js/28.c3ec2847.js",
    "revision": "f36838d173c218f8bbff9b14f5f43e1d"
  },
  {
    "url": "assets/js/29.6177b568.js",
    "revision": "b05b599dc9a38aebaa2289b60373a128"
  },
  {
    "url": "assets/js/30.2a6bb971.js",
    "revision": "ce6d38a18ba87ac1970b323cd6d46a4b"
  },
  {
    "url": "assets/js/31.61301c0c.js",
    "revision": "3da3506ac0be3b926adf5c67fb7d5031"
  },
  {
    "url": "assets/js/32.f97a9ffc.js",
    "revision": "b6955f59f321cf324d3d0754add75db6"
  },
  {
    "url": "assets/js/33.fffa1d54.js",
    "revision": "fd99656f2cd5ef07eab2a7e3562e0975"
  },
  {
    "url": "assets/js/34.a3f9c801.js",
    "revision": "65de7d62cdb5e2c3652430bfddb0fd4d"
  },
  {
    "url": "assets/js/35.dc35343e.js",
    "revision": "d067ecfc14ea1dd1d13d7d8a8ea5bec6"
  },
  {
    "url": "assets/js/36.72c693ca.js",
    "revision": "fd992d5ff479bd5709ac113f1ea313c3"
  },
  {
    "url": "assets/js/37.5b99b6ce.js",
    "revision": "d2287a1d3779897aeb9f46219b051148"
  },
  {
    "url": "assets/js/38.8b72d46f.js",
    "revision": "d8af55118ee04ae77930905e571b288a"
  },
  {
    "url": "assets/js/39.2f141478.js",
    "revision": "cceb7e471f2429661010372eb6dce822"
  },
  {
    "url": "assets/js/40.c2a68f65.js",
    "revision": "ee3397ef6e3088ed406c778a53abc1d6"
  },
  {
    "url": "assets/js/41.c765438b.js",
    "revision": "1a8257e8bc173927cf698f9b4cd72133"
  },
  {
    "url": "assets/js/42.8b933924.js",
    "revision": "67c5f3812eaa3798e15466478cd97932"
  },
  {
    "url": "assets/js/43.4074a0bb.js",
    "revision": "c0fef46ee161ff6480b7e6c2516296c6"
  },
  {
    "url": "assets/js/5.fa0828cb.js",
    "revision": "c8564f08f3226941470e06a02794fb41"
  },
  {
    "url": "assets/js/6.247fa849.js",
    "revision": "88a2cdb9c5eb9f4272f92418a3464ca6"
  },
  {
    "url": "assets/js/7.a245ccba.js",
    "revision": "907f31d3a33c771a7c14bf8b6c845056"
  },
  {
    "url": "assets/js/8.ce999a8d.js",
    "revision": "641654da03ba7d9235c212f5c60311af"
  },
  {
    "url": "assets/js/9.d2a68103.js",
    "revision": "9191093f50da7c9914f1a2df2a285dcb"
  },
  {
    "url": "assets/js/app.963c84d4.js",
    "revision": "9369ce5f578ea343e169f73a0d01fc13"
  },
  {
    "url": "assets/js/vendors~flowchart.e8d12bd2.js",
    "revision": "fb682f153a9c75043a31764472c61a60"
  },
  {
    "url": "avatar.jpg",
    "revision": "fda29595e31b4b90782a444e99dbd830"
  },
  {
    "url": "belief-smash/index.html",
    "revision": "5626de45b108630310c89afa0f3baf35"
  },
  {
    "url": "blogs/tech/index.html",
    "revision": "1fca46e205912f25a82cfa4c1689b9ea"
  },
  {
    "url": "calc-in-css/index.html",
    "revision": "465bf048024f813df550c5e79a1f7a51"
  },
  {
    "url": "categories/book/index.html",
    "revision": "72768e800533d1814a05c32dfa14a3c3"
  },
  {
    "url": "categories/essay/index.html",
    "revision": "620b566ee38e764f9069d84bf0d8c598"
  },
  {
    "url": "categories/essay/page/2/index.html",
    "revision": "cf780765f3619441a3063d2bee179992"
  },
  {
    "url": "categories/index.html",
    "revision": "de96166495b00b7d3c2641e24a9c228d"
  },
  {
    "url": "categories/study/index.html",
    "revision": "2f3cb86fa36c885c93af43d3a5c658fd"
  },
  {
    "url": "categories/tech/index.html",
    "revision": "421c15e13a9d8344204e8bdf681fb758"
  },
  {
    "url": "centering-in-css/index.html",
    "revision": "2fa6ab836fb1d858c07dde7cc800751b"
  },
  {
    "url": "comment/index.html",
    "revision": "4ca8ba69371b5f52ea5993bb19c51f55"
  },
  {
    "url": "css-media-queries/index.html",
    "revision": "290b3fed8d5bb612c3ad85e742082d37"
  },
  {
    "url": "diary-1/index.html",
    "revision": "d808a6a8df45e07581e1896b2c9003b7"
  },
  {
    "url": "efficiency-tips/index.html",
    "revision": "f1b762fdb7b501f45f6364a31750e582"
  },
  {
    "url": "index.html",
    "revision": "ab9ef1687a9f2efd8b3325315a98336f"
  },
  {
    "url": "js/typing.js",
    "revision": "89028904899ea871246271d708a05a0c"
  },
  {
    "url": "logo.png",
    "revision": "f1586e82d9db560c7038c09c35199a6d"
  },
  {
    "url": "long-term-habit/index.html",
    "revision": "45b4a69fd9caa70858647355ee3abc8b"
  },
  {
    "url": "long-termism/index.html",
    "revision": "8c38c448e366a87cfe0862596ccc7279"
  },
  {
    "url": "man-history/index.html",
    "revision": "4fbe1f7bb9142d9c848a7e6ef6e92fcf"
  },
  {
    "url": "os-tutorial/index.html",
    "revision": "271b51a958db77c09d80546d7c58a5e5"
  },
  {
    "url": "perfect-life/index.html",
    "revision": "b03e6dcce633611fa4731a9c9d6a4148"
  },
  {
    "url": "promise-1/index.html",
    "revision": "e9bda5c08b9a655554e88cc02119d1d3"
  },
  {
    "url": "rich-dad/index.html",
    "revision": "d9d452f68d1627120a55e3f021b6c9cf"
  },
  {
    "url": "set-a-goal/index.html",
    "revision": "096dd25f5c32b61fe364a973017bb811"
  },
  {
    "url": "tag/book/index.html",
    "revision": "8eeb1afe514c33168d4879cca71eae9c"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "daa2a99f343acc6162b1443e261a4234"
  },
  {
    "url": "tag/efficiency/index.html",
    "revision": "84b9690d7bec5e2a0fa2dfb5cb12bda4"
  },
  {
    "url": "tag/habit/index.html",
    "revision": "532136f883d5f0bd2214419abfff4bdb"
  },
  {
    "url": "tag/index.html",
    "revision": "bd1dad15d6bc6f4d782226ccc2d4ace8"
  },
  {
    "url": "tag/OS/index.html",
    "revision": "5e13c6d0e3cc1f82036396ebce981b23"
  },
  {
    "url": "tag/Promise/index.html",
    "revision": "80ea9a7cfc0a2f9c02cb85c2ec2a07de"
  },
  {
    "url": "tag/study/index.html",
    "revision": "f693e91e68e415db17f1cb1e56aa4898"
  },
  {
    "url": "tag/thought/index.html",
    "revision": "32eb726f29161f0dffda94eb5c84fea4"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "30c6302b1f8b47cc2f0d37c1bfa80afb"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "55f29cfcfaad3f3a90cfc425c0f8dc14"
  },
  {
    "url": "thought-1/index.html",
    "revision": "35065fdad173ce0eae6c3b2479303707"
  },
  {
    "url": "thought-2/index.html",
    "revision": "3dd92649bf7822f2f9a47d443cede3ee"
  },
  {
    "url": "thought-3/index.html",
    "revision": "8bfdcd649064a45907ecd1d80a85ae33"
  },
  {
    "url": "thought-4/index.html",
    "revision": "ce1e310c42bb202feff2ff2136dbe6e9"
  },
  {
    "url": "time-friend/index.html",
    "revision": "2130fdfdaed91060b9baacf31d1bfcf2"
  },
  {
    "url": "time-go-01/index.html",
    "revision": "03b51b25b813049328ffe1bcc30b0d4b"
  },
  {
    "url": "time-go-02/index.html",
    "revision": "e149705c840ecbefffc53c7d30c88d1d"
  },
  {
    "url": "time-go-rich/index.html",
    "revision": "a35dc8713b6fca6191207f7cc5ce7ce1"
  },
  {
    "url": "timeline/index.html",
    "revision": "b1d2cf0350396e820b34bba8ed2f55ca"
  },
  {
    "url": "vuex-source-code/index.html",
    "revision": "aad03eb86a169031d1e14ab7dc7125ee"
  },
  {
    "url": "webpack/index.html",
    "revision": "f3bff3cfede1d5c46ab119e210743fd0"
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
