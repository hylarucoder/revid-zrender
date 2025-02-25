export declare function createTextNode(text: string): Text;
export declare function createComment(text: string): Comment;
export declare function insertBefore(parentNode: Node, newNode: Node, referenceNode: Node | null): void;
export declare function removeChild(node: Node, child: Node): void;
export declare function appendChild(node: Node, child: Node): void;
export declare function parentNode(node: Node): Node | null;
export declare function nextSibling(node: Node): Node | null;
export declare function tagName(elm: Element): string;
export declare function setTextContent(node: Node, text: string | null): void;
export declare function getTextContent(node: Node): string | null;
export declare function isElement(node: Node): node is Element;
export declare function isText(node: Node): node is Text;
export declare function isComment(node: Node): node is Comment;
//# sourceMappingURL=domapi.d.ts.map