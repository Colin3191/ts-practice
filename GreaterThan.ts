type GreaterThan<
  Num1 extends number,
  Num2 extends number,
  CountArr extends unknown[] = []
> = CountArr["length"] extends Num1
  ? false
  : CountArr["length"] extends Num2
  ? true
  : GreaterThan<Num1, Num2, [...CountArr, unknown]>;

type GreaterThanRes = GreaterThan<1, 0>;
