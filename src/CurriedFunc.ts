type CurriedFunc<Params, Return> = Params extends [infer Arg, ...infer Rest]
  ? (arg: Arg) => CurriedFunc<Rest, Return>
  : Return;

const fn = (a: string, b: number, c: boolean) => {};

declare function curring<Fn>(
  fn: Fn
): Fn extends (...args: infer Args) => infer Return
  ? CurriedFunc<Args, Return>
  : never;

const curriedFn = curring(fn);
