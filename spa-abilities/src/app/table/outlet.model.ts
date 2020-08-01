/**
 * Outlet is used to plug the a link between two table lines. Each Table line have two Outlets.
 */
export class Outlet {
  x: number;
  y: number;
}

/**
 * Convenient way to store the two Outlets of the Table lines.
 * There is one for the left and one for the right.
 */
export class OutletPair {
  left: Outlet;
  right: Outlet;
}
