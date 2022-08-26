import { BuildArray } from "./BuildArray";

type Subtract<
  Num1 extends number,
  Num2 extends number
> = BuildArray<Num1> extends [...BuildArray<Num2>, ...infer Rest]
  ? Rest["length"]
  : never;

type SubtractRes = Subtract<5, 3>;
