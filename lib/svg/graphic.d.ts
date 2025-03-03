import Path, { PathStyleProps } from '../graphic/Path';
import ZRImage from '../graphic/Image';
import TSpan from '../graphic/TSpan';
import { SVGVNodeAttrs, SVGVNode, BrushScope } from './core';
import Displayable from '../graphic/Displayable';
export declare function brushSVGPath(el: Path, scope: BrushScope): SVGVNode;
export declare function brushSVGImage(el: ZRImage, scope: BrushScope): SVGVNode;
export declare function brushSVGTSpan(el: TSpan, scope: BrushScope): SVGVNode;
export declare function brush(el: Displayable, scope: BrushScope): SVGVNode;
export declare function setGradient(style: PathStyleProps, attrs: SVGVNodeAttrs, target: 'fill' | 'stroke', scope: BrushScope): void;
export declare function setPattern(el: Displayable, attrs: SVGVNodeAttrs, target: 'fill' | 'stroke', scope: BrushScope): void;
export declare function setClipPath(clipPath: Path, attrs: SVGVNodeAttrs, scope: BrushScope): void;
//# sourceMappingURL=graphic.d.ts.map