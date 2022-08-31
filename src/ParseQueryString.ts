type ParseParam<Str extends string> = Str extends `${infer K}=${infer V}`
  ? { [Key in K]: V }
  : {};
type a = ParseParam<"a=1">;

type MergeObj<
  Obj1 extends Record<string, any>,
  Obj2 extends Record<string, any>
> = {
  [Key in keyof Obj1 | keyof Obj2]: Key extends keyof Obj1
    ? Key extends keyof Obj2
      ? Obj1[Key] | Obj2[Key]
      : Obj1[Key]
    : Key extends keyof Obj2
    ? Obj2[Key]
    : never;
};
type b = MergeObj<{ a: "1" }, { b: "2" }>;

type ParseQueryString<Str extends string> =
  Str extends `${infer Param}&${infer Rest}`
    ? MergeObj<ParseParam<Param>, ParseQueryString<Rest>>
    : ParseParam<Str>;

type ParseQueryStringRes = ParseQueryString<"a=1&b=2&c=3">;
