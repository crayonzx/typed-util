declare namespace Common {
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
  };

  namespace SVGPath {
    /** moveto */
    type M = ['M' | 'm', number, number];
    /** lineto */
    type L = ['L' | 'l', number, number];
    /** horizontal lineto */
    type H = ['H' | 'h'];
    /** vertical lineto */
    type V = ['V' | 'v'];
    /** curveto */
    type C = ['C' | 'c'];
    /** smooth curveto */
    type S = ['S' | 's'];
    /** quadratic Belzier curve */
    type Q = ['Q' | 'q', number, number, number, number];
    /** smooth quadratic Belzier curveto */
    type T = ['T' | 't', number, number, number, number];
    /** elliptical Arc */
    type A = ['A' | 'a', number, number, number, number, number, number, number];
    /** closepath */
    type Z = ['Z' | 'z'];
  }
  type SVGPath = Array<
    | SVGPath.M
    | SVGPath.L
    | SVGPath.H
    | SVGPath.V
    | SVGPath.C
    | SVGPath.S
    | SVGPath.Q
    | SVGPath.T
    | SVGPath.A
    | SVGPath.Z
  >;

  type Point = { x: number; y: number; index?: number };
  type Points = Array<[number, number]>;
}
