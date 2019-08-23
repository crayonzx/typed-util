declare namespace GCommon {
  type ID = string;
  type Color = string;

  type Style = {
    /**  设置用于填充绘画的颜色、渐变或模式 */
    fill?: string;
    fillOpacity?: number;
    /**  设置用于笔触的颜色、渐变或模式 */
    stroke?: string;
    /**  设置用于阴影的颜色 */
    shadowColor?: string;
    /**  设置用于阴影的模糊级别 */
    shadowBlur?: number;
    /**  设置阴影距形状的水平距离 */
    shadowOffsetX?: number;
    /**  设置阴影距形状的垂直距离 */
    shadowOffsetY?: number;
    /**  设置绘图的当前 alpha 或透明值 */
    opacity?: number;
    /**  设置新图像如何绘制到已有的图像上 */
    globalCompositeOperation?: string;

    lineAppendWidth?: number;

    /** 线型 */
    lineDash?: number | number[];
    /** 线宽 */
    lineWidth?: number;

    /** 鼠标指针 */
    cursor?: string;
  };

  /** [SVG Path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) */
  namespace SVGPath {
    /** move to: "M x y" or "m dx dy" */
    type M = ['M' | 'm', number, number];
    /** line to: "L x y" or "l dx dy" */
    type L = ['L' | 'l', number, number];
    /** horizontal line to: "H x" or "h dx" */
    type H = ['H' | 'h', number];
    /** vertical line to: "V y" or "v dy" */
    type V = ['V' | 'v', number];
    /** curve to: "C x1 y1, x2 y2, x y" or "c dx1 dy1, dx2 dy2, dx dy" */
    type C = ['C' | 'c', number, number, number, number, number, number];
    /** smooth curve to: "S x2 y2, x y" or "s dx2 dy2, dx dy" */
    type S = ['S' | 's', number, number, number, number];
    /** quadratic Belzier curve: "Q x1 y1, x y" or "q dx1 dy1, dx dy" */
    type Q = ['Q' | 'q', number, number, number, number];
    /** smooth quadratic Belzier curve to: "T x y" or "t dx dy" */
    type T = ['T' | 't', number, number];
    /**
     * elliptical Arc:
     * "A rx ry x-axis-rotation large-arc-flag sweep-flag x y"
     * or "a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy"
     */
    type A = ['A' | 'a', number, number, number, number, number, number, number];
    /** closepath: "Z" or "z" */
    type Z = ['Z' | 'z'];

    type CmdType = Cmd[0];
    type Cmd = M | L | H | V | C | S | Q | T | A | Z;
  }
  type SVGPath = Array<SVGPath.Cmd>;

  type SVGPathOrStr = SVGPath | string;

  type Point = { x: number; y: number; index?: number };
  type Points = Array<[number, number]>;

  type Matrix = [number, number, number, number, number, number, number, number, number];

  type BBox = {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    centerX?: number;
    centerY?: number;
  };
}
