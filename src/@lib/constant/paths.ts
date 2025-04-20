import nextConfig from '../../../next.config';

export const Paths = {
  root: '/',
  maintenance: '/maintenance',
  // auth
  auth: {
    login: '/auth/login',
    resetPassword: '/auth/reset-password',
  },
};

// is used for access those paths which are not restricted by authentication & not wrap the layout
export const publicPaths = [Paths.auth.login, Paths.maintenance, Paths.auth.resetPassword];

export const authPaths = [...getAllStaticPaths(Paths.auth)];

export const securedPathsPrefix = [Paths.root];
export const securedPaths = [];

export function pathToUrl(path: string): string {
  path = path.startsWith('/') ? path : `/${path}`;
  return `${location?.origin}${path}`;
}

export function getAllStaticPaths(obj: Record<string, any>) {
  const paths = [];

  function traverse(o: Record<string, any>) {
    for (const key in o) {
      if (typeof o[key] === 'string') {
        paths.push(o[key]);
      } else if (typeof o[key] === 'function') {
        // Skip functions that generate paths based on arguments
        continue;
      } else {
        traverse(o[key]);
      }
    }
  }

  traverse(obj);
  return paths;
}

export const pathByNextConfig = (x: string) => (x.endsWith('/') ? x : nextConfig.trailingSlash ? x + '/' : x);

export const checkPathIsInAuth = (pathName: string): boolean => {
  pathName = pathByNextConfig(pathName);
  return authPaths.some((x) => pathByNextConfig(x) === pathName);
};

export const checkPathIsInPublic = (pathName: string): boolean => {
  pathName = pathByNextConfig(pathName);
  if (publicPaths.some((x) => pathByNextConfig(x) === pathName)) return true;
  if (
    securedPaths?.some((x) => pathByNextConfig(x) === pathName) ||
    securedPathsPrefix?.some((x) => {
      if (x === '/') return true;
      const endPortion = pathName.slice(pathByNextConfig(x).length - (nextConfig.trailingSlash ? 1 : 0));
      return pathName.startsWith(pathByNextConfig(x)) && (endPortion.startsWith('/') || endPortion.length < 1);
    })
  ) {
    return false;
  }

  return true;
};
