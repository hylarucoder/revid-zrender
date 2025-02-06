import { VectorArray } from './vector';
export declare type MatrixArray = number[];
export declare function create(): MatrixArray;
export declare function identity(out: MatrixArray): MatrixArray;
export declare function copy(out: MatrixArray, m: MatrixArray): MatrixArray;
export declare function mul(out: MatrixArray, m1: MatrixArray, m2: MatrixArray): MatrixArray;
export declare function translate(out: MatrixArray, a: MatrixArray, v: VectorArray): MatrixArray;
export declare function rotate(out: MatrixArray, a: MatrixArray, rad: number, pivot?: VectorArray): MatrixArray;
export declare function scale(out: MatrixArray, a: MatrixArray, v: VectorArray): MatrixArray;
export declare function invert(out: MatrixArray, a: MatrixArray): MatrixArray | null;
export declare function clone(a: MatrixArray): MatrixArray;
//# sourceMappingURL=matrix.d.ts.map