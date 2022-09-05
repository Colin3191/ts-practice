type Defaultize1<A, B> = {
  [K in keyof A as K extends keyof B ? K : never]?: A[K];
} & {
  [K in keyof A as K extends keyof B ? never : K]: A[K];
} & {
  [K in keyof B as K extends keyof A ? never : K]: B[K];
};

type Defaultize2<A, B> = Pick<A, Exclude<keyof A, keyof B>> &
  Pick<B, Exclude<keyof B, keyof A>> &
  Partial<Pick<A, Extract<keyof A, keyof B>>> &
  Partial<Pick<A, Extract<keyof B, keyof A>>>;

type o1 = {
  a: 111;
  b: 222;
  c: 333;
};

type o2 = {
  b: 222;
  c: 333;
  d: 222;
};

type Copy<T> = {
  [K in keyof T]: T[K];
};

type Defaultize1Res = Copy<Defaultize1<o1, o2>>;

type Defaultize2Res = Copy<Defaultize2<o1, o2>>;
