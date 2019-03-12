// @antv/util/lib/path
declare module '@antv/util/lib/path/catmull-rom2bezier' {
  const catmullRom2bezier: (crp: number[], z: boolean) => GCommon.SVGPath;
  export = catmullRom2bezier;
}
declare module '@antv/util/lib/path/fill-path' {
  const fillPath: (source: any, target: any) => any;
  export = fillPath;
}
declare module '@antv/util/lib/path/fill-path-by-diff' {
  const fillPathByDiff: (source: any, target: any) => any;
  export = fillPathByDiff;
}
declare module '@antv/util/lib/path/format-path' {
  const formatPath: (fromPath: any, toPath: any) => any;
  export = formatPath;
}
declare module '@antv/util/lib/path/path-intersection' {
  const pathIntersection: {
    (path1: GCommon.SVGPathOrStr, path2: GCommon.SVGPathOrStr): GCommon.Point[];
    (path1: GCommon.SVGPathOrStr, path2: GCommon.SVGPathOrStr, justCount: true): number;
  };
  export = pathIntersection;
}
declare module '@antv/util/lib/path/parse-path-array' {
  const parsePathArray: (path: GCommon.SVGPath) => string;
  export = parsePathArray;
}
declare module '@antv/util/lib/path/parse-path-string' {
  const parsePathString: (pathString: GCommon.SVGPathOrStr) => GCommon.SVGPath;
  export = parsePathString;
}
declare module '@antv/util/lib/path/path2absolute' {
  const pathToAbsolute: (pathArray: GCommon.SVGPathOrStr) => GCommon.SVGPath;
  export = pathToAbsolute;
}
declare module '@antv/util/lib/path/path2curve' {
  const pathTocurve: (path: GCommon.SVGPathOrStr, path2?: GCommon.SVGPathOrStr) => GCommon.SVGPath;
  export = pathTocurve;
}
declare module '@antv/util/lib/path/rect-path' {
  const rectPath: (x: number, y: number, w: number, h: number, r?: number) => GCommon.SVGPath;
  export = rectPath;
}

declare module '@antv/util/lib/path' {
  const path: {
    catmullRom2Bezier: typeof import('@antv/util/lib/path/catmull-rom2bezier');
    catmullRomToBezier: typeof import('@antv/util/lib/path/catmull-rom2bezier');
    fillPath: typeof import('@antv/util/lib/path/fill-path');
    fillPathByDiff: typeof import('@antv/util/lib/path/fill-path-by-diff');
    formatPath: typeof import('@antv/util/lib/path/format-path');
    intersection: typeof import('@antv/util/lib/path/path-intersection');
    pathIntersection: typeof import('@antv/util/lib/path/path-intersection');
    parsePathArray: typeof import('@antv/util/lib/path/parse-path-array');
    parsePathString: typeof import('@antv/util/lib/path/parse-path-string');
    pathToAbsolute: typeof import('@antv/util/lib/path/path2absolute');
    path2absolute: typeof import('@antv/util/lib/path/path2absolute');
    pathTocurve: typeof import('@antv/util/lib/path/path2curve');
    path2curve: typeof import('@antv/util/lib/path/path2curve');
    rectPath: typeof import('@antv/util/lib/path/rect-path');
  };
  export = path;
}
