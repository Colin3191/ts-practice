export type Camelcase<Str extends string> =
  Str extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${Camelcase<Rest>}`
    : Str;

type CamelcaseRes1 = Camelcase<"wang_chao_min">;

type CamelcaseRes2 = Camelcase<"a_a" | "b_b" | "c_c">;

type CamelcaseArr<Arr extends unknown[]> = Arr extends [
  infer First,
  ...infer Rest
]
  ? [Camelcase<First & string>, ...CamelcaseArr<Rest>]
  : [];

type CamelcaseArrRes = CamelcaseArr<["w_a", "w_b"]>;
