type RemoveLastDelimiter<
  Str extends string,
  Delimiter extends string
> = Str extends `${infer Rest}${Delimiter}` ? Rest : Str;

type JoinType<
  Items extends unknown[],
  Delimiter extends string
> = Items extends [infer First, ...infer Rest]
  ? RemoveLastDelimiter<
      `${First & string}${Delimiter}${JoinType<Rest, Delimiter>}`,
      Delimiter
    >
  : "";

declare function join<Delimiter extends string>(
  delimiter: Delimiter
): <Items extends string[]>(...parts: Items) => JoinType<Items, Delimiter>;

const res = join("_")("xu", "xin");
