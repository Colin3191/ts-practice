type CurriedFunc<Params, Return> = Params extends [infer Arg, ...infer Rest]
  ? (arg: Arg) => CurriedFunc<Rest, Return>
  : Return;

declare function curring<Fn>(
  fn: Fn
): Fn extends (...args: infer Args) => infer Return
  ? CurriedFunc<Args, Return>
  : never;

const fn = (a: string, b: number, c: boolean) => {};

const curriedFn = curring(fn);
