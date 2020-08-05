interface HighlighterOptions {
    html: boolean;
    classPrefix: string;
    colors: {
        [key: string]: string;
    };
}
export declare function highlight(sqlString: string, options?: HighlighterOptions): string;
export {};
