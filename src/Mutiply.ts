import { Subtract } from "./Subtract";
import { BuildArray } from "./BuildArray";

type Mutiply<
  Num1 extends number,
  Num2 extends number,
  ResultArr extends unknown[] = []
> = Num2 extends 0
  ? ResultArr["length"]
  : Mutiply<Num1, Subtract<Num2, 1>, [...BuildArray<Num1>, ...ResultArr]>;

type MutiplyRes = Mutiply<3, 2>;
