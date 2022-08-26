import { BuildArray } from "./BuildArray";

type Add<Num1 extends number, Num2 extends number> = [
  ...BuildArray<Num1>,
  ...BuildArray<Num2>
]["length"];

type AddRes = Add<1, 2>;
