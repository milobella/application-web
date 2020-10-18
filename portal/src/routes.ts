export function activeWhenAnyOf(routes: string[], location: Location) {
  return routes.some((route: string) => location.pathname === route);
}

export function activeWhenPrefix(routes: string[], location: Location) {
  return routes.some((route: string) => location.pathname.startsWith(route));
}

export function activeWhenAnyExcept(routes: string[], location: Location) {
  return routes.every((route) => location.pathname !== route);
}
