import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { ProjectDetailsComponents } from './collections/ProjectDetailsComponent'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  cors: [
    'http://localhost:3000', // Allow your Next.js dev server
    'http://localhost:3001',
    'https://carbackend-delta.vercel.app',
    'https://carfrontend-tawny.vercel.app',
    'https://www.promasters.net',
    'https://promasters.net',
    'http://127.0.0.1:5500',
    'https://youuniverse.vercel.app',
    // Add your production domain later, e.g.:
    // 'https://yourdomain.com',
  ],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, ProjectDetailsComponents],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [],
  csrf: [
    'http://localhost:3001',
    'http://localhost:3000',
    'https://carbackend-delta.vercel.app',
    'https://carfrontend-tawny.vercel.app',
    'https://www.promasters.net',
    'https://promasters.net',
    'http://127.0.0.1:5500',
    'https://youuniverse.vercel.app',
    // 'https://yourdomain.com',
  ],
})
