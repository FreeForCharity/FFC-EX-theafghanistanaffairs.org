/**
 * Helper function to construct asset paths that work with GitHub Pages basePath.
 *
 * When a site is deployed to a GitHub Pages project subpath
 * (e.g. `<org>.github.io/<repo>/`), all assets need to be prefixed with the
 * repository name via NEXT_PUBLIC_BASE_PATH.
 *
 * For a custom apex domain (theafghanistanaffairs.org), no basePath is needed
 * and NEXT_PUBLIC_BASE_PATH is left empty.
 *
 * @param path - The asset path starting with /
 * @returns The full asset path including basePath if configured
 */
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${basePath}${path}`
}
