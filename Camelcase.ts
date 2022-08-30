type Camelcase<
  Str extends string
> = Str extends `${infer Left}_${infer Right}${infer Rest}`
  ? `${Left}${Uppercase<Right>}${Camelcase<Rest>}`
  : Str;

type CamelcaseRes = Camelcase<"wang_chao_min">;
