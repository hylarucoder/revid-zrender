import { ImagePatternObject } from '../graphic/Pattern';
import CanvasPainter from './Painter';
import { GradientObject } from '../graphic/Gradient';
import Eventful from '../core/Eventful';
import { ElementEventCallback } from '../Element';
import Displayable from '../graphic/Displayable';
import BoundingRect from '../core/BoundingRect';
export interface LayerConfig {
    clearColor?: string | GradientObject | ImagePatternObject;
    motionBlur?: boolean;
    lastFrameAlpha?: number;
}
export default class Layer extends Eventful {
    id: string;
    dom: HTMLCanvasElement;
    domBack: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    ctxBack: CanvasRenderingContext2D;
    painter: CanvasPainter;
    clearColor: string | GradientObject | ImagePatternObject;
    motionBlur: boolean;
    lastFrameAlpha: number;
    dpr: number;
    virtual: boolean;
    config: {};
    incremental: boolean;
    zlevel: number;
    maxRepaintRectCount: number;
    private _paintRects;
    __dirty: boolean;
    __firstTimePaint: boolean;
    __used: boolean;
    __drawIndex: number;
    __startIndex: number;
    __endIndex: number;
    __prevStartIndex: number;
    __prevEndIndex: number;
    __builtin__: boolean;
    constructor(id: string | HTMLCanvasElement, painter: CanvasPainter, dpr?: number);
    getElementCount(): number;
    afterBrush(): void;
    initContext(): void;
    setUnpainted(): void;
    createBackBuffer(): void;
    createRepaintRects(displayList: Displayable[], prevList: Displayable[], viewWidth: number, viewHeight: number): BoundingRect[];
    debugGetPaintRects(): BoundingRect[];
    resize(width: number, height: number): void;
    clear(clearAll?: boolean, clearColor?: string | GradientObject | ImagePatternObject, repaintRects?: BoundingRect[]): void;
    refresh: (clearColor?: string | GradientObject | ImagePatternObject) => void;
    renderToCanvas: (ctx: CanvasRenderingContext2D) => void;
    onclick: ElementEventCallback<unknown, this>;
    ondblclick: ElementEventCallback<unknown, this>;
    onmouseover: ElementEventCallback<unknown, this>;
    onmouseout: ElementEventCallback<unknown, this>;
    onmousemove: ElementEventCallback<unknown, this>;
    onmousewheel: ElementEventCallback<unknown, this>;
    onmousedown: ElementEventCallback<unknown, this>;
    onmouseup: ElementEventCallback<unknown, this>;
    oncontextmenu: ElementEventCallback<unknown, this>;
    ondrag: ElementEventCallback<unknown, this>;
    ondragstart: ElementEventCallback<unknown, this>;
    ondragend: ElementEventCallback<unknown, this>;
    ondragenter: ElementEventCallback<unknown, this>;
    ondragleave: ElementEventCallback<unknown, this>;
    ondragover: ElementEventCallback<unknown, this>;
    ondrop: ElementEventCallback<unknown, this>;
}
//# sourceMappingURL=Layer.d.ts.map