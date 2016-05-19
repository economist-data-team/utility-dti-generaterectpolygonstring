import isArray from 'lodash/isArray';

/**
 * generates a polygon points string for a rectangle
 * we use a polygon rather than a rect here because it makes it much
 * easier to animate across an axis (i.e. from positive to negative)
 *
 * the first four options can also be presented as an array
 *
 * @param {Number|Array} x - origin x, or [x, y, dx, dy]
 * @param {Number|Boolean} y - origin y, or pointMode
 * @param {Number} dx - width in pixels
 * @param {Number} dy - height in pixels
 * @param {Boolean} pointMode - determines if dx and dy are deltas or
 *                            second x and y coordinates for the rect
 *
 * @return {String}   the polygon string for its `points` attr
 */
// eslint-disable-next-line id-length
export default function generateRectPolygonString(x, y, dx, dy, pointMode = false) {
  if (isArray(x)) {
    pointMode = y || false;
    [ x, y, dx, dy ] = x;
  }
  const startX = x;
  const startY = y;
  const finalX = dx + (pointMode ? 0 : x);
  const finalY = dy + (pointMode ? 0 : y);
  const points = [
    [ startX, startY ], [ finalX, startY ],
    [ finalX, finalY ], [ startX, finalY ],
  ];
  return points.map((point) => point.join(',')).join(' ');
}
