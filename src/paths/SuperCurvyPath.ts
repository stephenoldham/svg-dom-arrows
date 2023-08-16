import { Path } from './Path';
import { PathOptions, Point } from '@src/models';

export class SuperCurvyPath extends Path {
  constructor(options: PathOptions) {
    super(options);
  }

  /**
   * Returns an SVG path (or what's supposed to be in attribute `d`)
   * You can extend this function and add your own logic to draw whatever path you'd like.
   * @param endBbox bbox of the end dom element
   * @param startBbox bbox of the start dom element
   * @returns path string
   */
  getPath(): string {
    const { width, height, start, end } = this.getSVGProportions();

    const startX = start.x >= end.x ? width : 0;
    const startY = start.y >= end.y ? height : 0;
    const endX = width - startX;
    const endY = height - startY;

    console.log(startX, startY, endX, endY)
    console.log(this.options.start, this.options.end)

    let points = [
      { x: startX, y: startY },
    ]

    if((this.options.start.position.top === 1 || this.options.end.position.top === 0) && startY < endY) {
      points = startY < endY
        ? points.concat([
          { 
            x: startX,
            y: Math.abs(startY - (startY + endY) * 0.5)
          },
          {
            x: Math.abs(startX - (startX + endX) * 0.5),
            y: Math.abs(startY - (startY + endY) * 0.5) 
          }, // center
          { x: endX, y: Math.abs(startY - (startY + endY) * 0.5) }
        ])
        : points.concat([
          { x: Math.abs(startX - (startX + endX) * 0.5), y: startY },
          {
            x: Math.abs(startX - (startX + endX) * 0.5),
            y: Math.abs(startY - (startY + endY) * 0.5)
          }, // center
          { x: Math.abs(startX - (startX + endX) * 0.5), y: endY }
        ])

    }else{
      points = points.concat([
        { x: startX, y: startY + 50 },
        { x: Math.abs(startX - (startX + endX) * 0.25), y: startY + 50 },

        { x: Math.abs(startX - (startX + endX) * 0.5), y: startY + 50 },
        
        {
          x: Math.abs(startX - (startX + endX) * 0.5),
          y: startY
        },
        {
          x: Math.abs(startX - (startX + endX) * 0.5),
          y: endY
        },

        { x: Math.abs(startX - (startX + endX) * 0.5), y: endY - 50 },
        
        {
          x: Math.abs(endX + (startX - endX) * 0.25),
          y: endY - 50 
        },
        { x: endX, y: endY - 50 },
      ])
    }

    points.push({ x: endX, y: endY });

    return this.svgPath(points);
  }

  svgPath(points: Point[]): string {
    console.log(points)

    return points.length > 5
      ? `
        M ${points[0].x},${points[0].y}
        C ${points[1].x},${points[1].y} ${points[1].x},${points[1].y} ${points[2].x},${points[2].y}
        C ${points[3].x},${points[3].y} ${points[3].x},${points[3].y} ${points[4].x},${points[4].y}
        L ${points[5].x},${points[5].y}
        C ${points[6].x},${points[6].y} ${points[6].x},${points[6].y} ${points[7].x},${points[7].y}
        C ${points[8].x},${points[8].y} ${points[8].x},${points[8].y} ${points[9].x},${points[9].y}
      ` : `
      M ${points[0].x},${points[0].y}
      C ${points[1].x},${points[1].y} ${points[1].x},${points[1].y} ${points[2].x},${points[2].y}
      C ${points[3].x},${points[3].y} ${points[3].x},${points[3].y} ${points[4].x},${points[4].y}
      `
  }
}
