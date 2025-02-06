import Element, { ElementProps, ElementStatePropNames, ElementAnimateConfig, ElementCommonState } from '../Element';
import BoundingRect from '../core/BoundingRect';
import { PropType, Dictionary, MapToType } from '../core/types';
import Path from './Path';
import Animator from '../animation/Animator';
export interface CommonStyleProps {
    shadowBlur?: number;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    shadowColor?: string;
    opacity?: number;
    blend?: string;
}
export declare const DEFAULT_COMMON_STYLE: CommonStyleProps;
export declare const DEFAULT_COMMON_ANIMATION_PROPS: MapToType<DisplayableProps, boolean>;
export interface DisplayableProps extends ElementProps {
    style?: Dictionary<any>;
    zlevel?: number;
    z?: number;
    z2?: number;
    culling?: boolean;
    cursor?: string;
    rectHover?: boolean;
    progressive?: boolean;
    incremental?: boolean;
    ignoreCoarsePointer?: boolean;
    batch?: boolean;
    invisible?: boolean;
}
declare type DisplayableKey = keyof DisplayableProps;
declare type DisplayablePropertyType = PropType<DisplayableProps, DisplayableKey>;
export declare type DisplayableStatePropNames = ElementStatePropNames | 'style' | 'z' | 'z2' | 'invisible';
export declare type DisplayableState = Pick<DisplayableProps, DisplayableStatePropNames> & ElementCommonState;
interface Displayable<Props extends DisplayableProps = DisplayableProps> {
    animate(key?: '', loop?: boolean): Animator<this>;
    animate(key: 'style', loop?: boolean): Animator<this['style']>;
    getState(stateName: string): DisplayableState;
    ensureState(stateName: string): DisplayableState;
    states: Dictionary<DisplayableState>;
    stateProxy: (stateName: string) => DisplayableState;
}
declare class Displayable<Props extends DisplayableProps = DisplayableProps> extends Element<Props> {
    invisible: boolean;
    z: number;
    z2: number;
    zlevel: number;
    culling: boolean;
    cursor: string;
    rectHover: boolean;
    incremental: boolean;
    ignoreCoarsePointer?: boolean;
    style: Dictionary<any>;
    protected _normalState: DisplayableState;
    protected _rect: BoundingRect;
    protected _paintRect: BoundingRect;
    protected _prevPaintRect: BoundingRect;
    dirtyRectTolerance: number;
    useHoverLayer?: boolean;
    __hoverStyle?: CommonStyleProps;
    __clipPaths?: Path[];
    __canvasFillGradient: CanvasGradient;
    __canvasStrokeGradient: CanvasGradient;
    __canvasFillPattern: CanvasPattern;
    __canvasStrokePattern: CanvasPattern;
    __svgEl: SVGElement;
    constructor(props?: Props);
    protected _init(props?: Props): void;
    beforeBrush(): void;
    afterBrush(): void;
    innerBeforeBrush(): void;
    innerAfterBrush(): void;
    shouldBePainted(viewWidth: number, viewHeight: number, considerClipPath: boolean, considerAncestors: boolean): boolean;
    contain(x: number, y: number): boolean;
    traverse<Context>(cb: (this: Context, el: this) => void, context?: Context): void;
    rectContain(x: number, y: number): boolean;
    getPaintRect(): BoundingRect;
    setPrevPaintRect(paintRect: BoundingRect): void;
    getPrevPaintRect(): BoundingRect;
    animateStyle(loop: boolean): Animator<this["style"]>;
    updateDuringAnimation(targetKey: string): void;
    attrKV(key: DisplayableKey, value: DisplayablePropertyType): void;
    setStyle(obj: Props['style']): this;
    setStyle<T extends keyof Props['style']>(obj: T, value: Props['style'][T]): this;
    dirtyStyle(notRedraw?: boolean): void;
    dirty(): void;
    styleChanged(): boolean;
    styleUpdated(): void;
    createStyle(obj?: Props['style']): Props["style"];
    useStyle(obj: Props['style']): void;
    isStyleObject(obj: Props['style']): any;
    protected _innerSaveToNormal(toState: DisplayableState): void;
    protected _applyStateObj(stateName: string, state: DisplayableState, normalState: DisplayableState, keepCurrentStates: boolean, transition: boolean, animationCfg: ElementAnimateConfig): void;
    protected _mergeStates(states: DisplayableState[]): DisplayableState;
    protected _mergeStyle(targetStyle: CommonStyleProps, sourceStyle: CommonStyleProps): CommonStyleProps;
    getAnimationStyleProps(): MapToType<DisplayableProps, boolean>;
    protected static initDefaultProps: void;
}
export default Displayable;
//# sourceMappingURL=Displayable.d.ts.map