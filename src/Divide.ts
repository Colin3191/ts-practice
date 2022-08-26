import { Subtract } from "./Subtract";

type Divide<
  Num1 extends number,
  Num2 extends number,
  CountArr extends unknown[] = []
> = Num1 extends 0
  ? CountArr["length"]
  : Divide<Subtract<Num1, Num2>, Num2, [...CountArr, unknown]>;

type DivideRes = Divide<12, 4>;
