type StrLen<
  Str extends string,
  CountArr extends unknown[] = []
> = Str extends `${string}${infer Rest}`
  ? StrLen<Rest, [...CountArr, unknown]>
  : CountArr["length"];

type StrLenRes = StrLen<"123">;
