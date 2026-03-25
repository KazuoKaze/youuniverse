// import { withPayload } from '@payloadcms/next/withPayload'
// import type { NextConfig } from 'next'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(__filename)

// const nextConfig: NextConfig = {
//   webpack: (webpackConfig) => {
//     webpackConfig.resolve.extensionAlias = {
//       '.cjs': ['.cts', '.cjs'],
//       '.js': ['.ts', '.tsx', '.js', '.jsx'],
//       '.mjs': ['.mts', '.mjs'],
//     }

//     return webpackConfig
//   },
//   turbopack: {
//     root: path.resolve(dirname),
//   },
// }

// export default withPayload(nextConfig, { devBundleServerPackages: false })

import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Required for Payload
  serverExternalPackages: ['payload', 'pino', 'thread-stream'],

  // Required because Payload modifies webpack
  turbopack: {},

  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }
    return config
  },
}

export default withPayload(nextConfig, {
  devBundleServerPackages: false,
})