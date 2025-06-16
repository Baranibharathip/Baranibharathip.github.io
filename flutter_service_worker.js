'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ca2e4594304e18191435ff1785c6a691",
"assets/AssetManifest.bin.json": "d3a6a7a687987e654c43c4791b6ddeaf",
"assets/AssetManifest.json": "6dc4f79058b6b1bf4f70e6bc4c800545",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "22358a1bd47647de340a9e204e9f0b3e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/syncfusion_flutter_charts/assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/packages/syncfusion_flutter_charts/assets/fonts/Times-New-Roman.ttf": "e2f6bf4ef7c6443cbb0ae33f1c1a9ccc",
"assets/packages/syncfusion_flutter_charts/images/apple.png": "90d5c610c60410e3283092081c7df585",
"assets/packages/syncfusion_flutter_charts/images/axes.png": "031493079ad8a9001ba7287b8ef3f5fc",
"assets/packages/syncfusion_flutter_charts/images/axisfeatures.png": "154c78486f136ea1a3af8e42fdfca4ec",
"assets/packages/syncfusion_flutter_charts/images/bike.png": "815d5fe99c5f263c698323586d48892d",
"assets/packages/syncfusion_flutter_charts/images/bike_legend.png": "b323d01ce28cd347d5fb8bfbcad61ec8",
"assets/packages/syncfusion_flutter_charts/images/book.png": "d28f91f2d78b5b78cd0c8ed02afc5b4b",
"assets/packages/syncfusion_flutter_charts/images/bus.png": "cba49d8812c1016fd82e5b5830601697",
"assets/packages/syncfusion_flutter_charts/images/car.png": "6f255fc6898dbb1c10bcd560f2a6a4a1",
"assets/packages/syncfusion_flutter_charts/images/cartesian.png": "95153136a457665bd0a4bc9043aaacd6",
"assets/packages/syncfusion_flutter_charts/images/car_legend.png": "c053e460ca6466b76bf2810ae081203e",
"assets/packages/syncfusion_flutter_charts/images/cloudy.png": "91518e4afa69a12a83fc6acb8ac3183c",
"assets/packages/syncfusion_flutter_charts/images/code.png": "8dbccb578d9b911518a9f89ad98e7515",
"assets/packages/syncfusion_flutter_charts/images/code1.png": "c8b09d1e208b60d5819e66f71e08dd79",
"assets/packages/syncfusion_flutter_charts/images/code2.png": "9c24521eb017d8686f57d8e1ec230fa9",
"assets/packages/syncfusion_flutter_charts/images/cycle.webp": "969745b655f54486a68dc57aea8b814b",
"assets/packages/syncfusion_flutter_charts/images/cycle_legend.png": "ce3bc98993ed3f1fa1cb9cf9e8f5549a",
"assets/packages/syncfusion_flutter_charts/images/dashline.png": "07855a68e7fb8ec5f07c0b025b75d22b",
"assets/packages/syncfusion_flutter_charts/images/Document.png": "9ce895a7fe1827c578a6a9b133590b76",
"assets/packages/syncfusion_flutter_charts/images/documentation.png": "9a62bfdadabb10cb3e8cdb05c92ac30c",
"assets/packages/syncfusion_flutter_charts/images/flight.png": "3740eace9155547c0b344e4fe4fa207f",
"assets/packages/syncfusion_flutter_charts/images/funnel.png": "5d3d0b84d0446a2f71bf3c75ba41aee4",
"assets/packages/syncfusion_flutter_charts/images/grouping_dark.png": "f777d6a47eee54796bf362bcda89abff",
"assets/packages/syncfusion_flutter_charts/images/home.png": "1f10254f2b5b9dc4a5c9550fd3b36082",
"assets/packages/syncfusion_flutter_charts/images/information.png": "b7797f39640989a9ee2b55752a70b42e",
"assets/packages/syncfusion_flutter_charts/images/livechart.png": "93fce101a4418422904b89092401c8a7",
"assets/packages/syncfusion_flutter_charts/images/maps_facebook.png": "f220eaf64e59611e5255093f34cba743",
"assets/packages/syncfusion_flutter_charts/images/maps_instagram.png": "3a88d4b0664c71f64d1dfcefe3e93905",
"assets/packages/syncfusion_flutter_charts/images/maps_snapchat.png": "79b650cd32c68c4fa8aa6d262adaea76",
"assets/packages/syncfusion_flutter_charts/images/maps_twitter.png": "84202db5b290ba209ee8f9cf5b15b42e",
"assets/packages/syncfusion_flutter_charts/images/orange.png": "689d37e41802f64eb143d93a15001481",
"assets/packages/syncfusion_flutter_charts/images/other_fruits.png": "e71460f94c2b301978f1c01a2985e409",
"assets/packages/syncfusion_flutter_charts/images/pears.png": "ac52e74ad3f4525c35e854ed1c3c88a0",
"assets/packages/syncfusion_flutter_charts/images/People_Circle12.png": "fee6b31985beb35b69c3506e2af15088",
"assets/packages/syncfusion_flutter_charts/images/People_Circle14.png": "b77f934a97bae7b1b2fdcf265fd77f0b",
"assets/packages/syncfusion_flutter_charts/images/People_Circle16.png": "95472f9d51c951d7643b957b20bd1ff3",
"assets/packages/syncfusion_flutter_charts/images/People_Circle3.png": "b2a6372eb6deb9a0ffa69466f961242c",
"assets/packages/syncfusion_flutter_charts/images/person.png": "242db02109c32e2cd0ada8f7ae4ead91",
"assets/packages/syncfusion_flutter_charts/images/personal_loan.png": "b56404f4318093922a8e287f823f40bc",
"assets/packages/syncfusion_flutter_charts/images/productpage.png": "8df5d0c5fce119c10e94cab665148942",
"assets/packages/syncfusion_flutter_charts/images/pyramid.png": "d2a194468a6303550e97b65cc2feaa26",
"assets/packages/syncfusion_flutter_charts/images/rainy.png": "a23c52c80c129bded57ba9ea0b504901",
"assets/packages/syncfusion_flutter_charts/images/SB.png": "626b346dbeb5c19d80c8cd067dc67ff7",
"assets/packages/syncfusion_flutter_charts/images/seriesfeatures.png": "cde4e392f0e907439a4113d3e129d6a7",
"assets/packages/syncfusion_flutter_charts/images/setting.png": "70a869fca1d53bad8ac1ba1db8d0851d",
"assets/packages/syncfusion_flutter_charts/images/sunny_image.png": "66ba3c442da37d53b67686f3fc6ebcbc",
"assets/packages/syncfusion_flutter_charts/images/syncfusion.png": "1d89c6ad092534898dbfeb9d66f7528c",
"assets/packages/syncfusion_flutter_charts/images/syncfusion1.png": "3eadf0a417bf00c2643799a82d6dbe89",
"assets/packages/syncfusion_flutter_charts/images/train.png": "cc12f86a22cf7a013cde14d024edf9ff",
"assets/packages/syncfusion_flutter_charts/images/truck_legend.png": "1394a8aad840267c7307ffe28b16871f",
"assets/packages/syncfusion_flutter_charts/images/userinteraction.png": "3b609d8d85a291408b68137ca358d8c8",
"assets/packages/syncfusion_flutter_charts/images/youtube.png": "0c781d861a8df15b16ed1ddde3d49535",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "1e458f2fd6f8d48fbdad2819eef34d1e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8da05ffc8eeb1b36ec2e7ed46389d636",
"/": "8da05ffc8eeb1b36ec2e7ed46389d636",
"main.dart.js": "a3d3bd87423a2f041d1e4b0eff370d3c",
"manifest.json": "9e7b34fd7c291ca2523123ef20497930",
"version.json": "52da4fdcad9a05995986892fdb0e9fa0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
