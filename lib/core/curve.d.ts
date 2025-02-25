import { VectorArray } from './vector';
export declare function cubicAt(p0: number, p1: number, p2: number, p3: number, t: number): number;
export declare function cubicDerivativeAt(p0: number, p1: number, p2: number, p3: number, t: number): number;
export declare function cubicRootAt(p0: number, p1: number, p2: number, p3: number, val: number, roots: number[]): number;
export declare function cubicExtrema(p0: number, p1: number, p2: number, p3: number, extrema: number[]): number;
export declare function cubicSubdivide(p0: number, p1: number, p2: number, p3: number, t: number, out: number[]): void;
export declare function cubicProjectPoint(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x: number, y: number, out: VectorArray): number;
export declare function cubicLength(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, iteration: number): number;
export declare function quadraticAt(p0: number, p1: number, p2: number, t: number): number;
export declare function quadraticDerivativeAt(p0: number, p1: number, p2: number, t: number): number;
export declare function quadraticRootAt(p0: number, p1: number, p2: number, val: number, roots: number[]): number;
export declare function quadraticExtremum(p0: number, p1: number, p2: number): number;
export declare function quadraticSubdivide(p0: number, p1: number, p2: number, t: number, out: number[]): void;
export declare function quadraticProjectPoint(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x: number, y: number, out: VectorArray): number;
export declare function quadraticLength(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, iteration: number): number;
//# sourceMappingURL=curve.d.ts.map