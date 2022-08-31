type BEM<
  Block extends string,
  Element extends string[],
  Modifiers extends string[]
> = `${Block}_${Element[number]}--${Modifiers[number]}`;

type BEMRes = BEM<"block", ["aaa", "bbb"], ["warning", "success"]>;
