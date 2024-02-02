/* THIS FILE IS AUTO GENERATED DO NOT MODIFY */
declare const namespace = "nav3703256676";

type states = {};

declare const classes: {
    "root": "nav3703256676__root";
    "textVol": "nav3703256676__textVol";
    "section": "nav3703256676__section";
    "title": "nav3703256676__title";
};

declare const vars: {};

declare const stVars: {};

declare const keyframes: {};

declare const layers: {};

declare const containers: {};

declare function st<T extends string = keyof states>(
    ctx: T | NullableString,
    s?: T extends keyof states ? states[T] | NullableString : NullableString,
    ...rest: NullableString[]
): string;

declare const style: typeof st;

declare function cssStates<T extends string = keyof states>(
    s: T extends keyof states ? states[T] : never,
    ctx?: T | string
): string;

export { 
    classes,
    vars,
    stVars,
    keyframes,
    layers,
    containers,
    namespace,
    st,
    style,
    cssStates
};

/* HELPERS */
type NullableString = string | undefined | null;
