import { build } from 'esbuild'

const ExcludeExternalPackagesPlugin = {
  name: 'ExcludeExternalPackagesPlugin',
  setup(build) {
    const filter = /^[^.\/]|^\.[^.\/]|^\.\.[^\/]/
    build.onResolve({ filter }, (args) => ({ path: args.path, external: true }))
  },
}

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  outfile: 'dist/index.js',
  plugins: [ExcludeExternalPackagesPlugin],
}).catch(() => process.exit(1))

build({
  platform: 'node',
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  outfile: 'dist/index.cjs',
  plugins: [ExcludeExternalPackagesPlugin],
}).catch(() => process.exit(1))
