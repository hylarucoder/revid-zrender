import { MatrixArray } from '../core/matrix';
import Transformable, { TransformProp } from '../core/Transformable';
import Displayable from '../graphic/Displayable';
import { GradientObject } from '../graphic/Gradient';
import { LinearGradientObject } from '../graphic/LinearGradient';
import Path from '../graphic/Path';
import { ImagePatternObject, PatternObject, SVGPatternObject } from '../graphic/Pattern';
import { RadialGradientObject } from '../graphic/RadialGradient';
export declare function normalizeColor(color: string): {
    color: string;
    opacity: number;
};
export declare function isAroundZero(transform: number): boolean;
export declare function round3(transform: number): number;
export declare function round4(transform: number): number;
export declare function round1(transform: number): number;
export declare function getMatrixStr(m: MatrixArray): string;
export declare const TEXT_ALIGN_TO_ANCHOR: {
    left: string;
    right: string;
    center: string;
    middle: string;
};
export declare function adjustTextY(y: number, lineHeight: number, textBaseline: CanvasTextBaseline): number;
export declare function hasShadow(style: Displayable['style']): any;
export declare function getShadowKey(displayable: Displayable): string;
export declare function getClipPathsKey(clipPaths: Path[]): string;
export declare function isImagePattern(val: any): val is ImagePatternObject;
export declare function isSVGPattern(val: any): val is SVGPatternObject;
export declare function isPattern(val: any): val is PatternObject;
export declare function isLinearGradient(val: GradientObject): val is LinearGradientObject;
export declare function isRadialGradient(val: GradientObject): val is RadialGradientObject;
export declare function isGradient(val: any): val is GradientObject;
export declare function getIdURL(id: string): string;
export declare function getPathPrecision(el: Path): number;
export declare function getSRTTransformString(transform: Partial<Pick<Transformable, TransformProp>>): string;
export declare const encodeBase64: (str: string) => string;
//# sourceMappingURL=helper.d.ts.map