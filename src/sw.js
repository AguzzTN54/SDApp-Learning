import 'regenerator-runtime'
import { setCacheNameDetails } from 'workbox-core'
import { ExpirationPlugin } from 'workbox-expiration'
import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import {
  CacheFirst,
  NetworkFirst,
  // NetworkOnly,
  StaleWhileRevalidate,
} from 'workbox-strategies'

setCacheNameDetails({
  prefix: 'SDApp',
  suffix: 'v1.1',
  precache: 'Core',
})

const precacheManifest = self.__WB_MANIFEST
precacheAndRoute(precacheManifest)

registerRoute(
  ({ url }) => url.href.indexOf('sw.js') > -1,
  new NetworkFirst({
    networkTimeoutSeconds: 3,
  })
)

registerRoute(
  ({ url }) => url.href.indexOf('bundle.js') > -1,
  new StaleWhileRevalidate()
)

registerRoute(
  ({ url }) => url.href.indexOf('stylesheet.css') > -1,
  new StaleWhileRevalidate()
)

registerRoute(
  new RegExp('.(?:css|js|woff)$'),
  new CacheFirst({
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
)
