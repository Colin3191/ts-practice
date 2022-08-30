type Fibonacci<
  Num extends number = 1,
  PrevArr extends unknown[] = [unknown],
  CurrArr extends unknown[] = [],
  indexArr extends unknown[] = []
> = indexArr["length"] extends Num
  ? CurrArr["length"]
  : Fibonacci<Num, CurrArr, [...PrevArr, ...CurrArr], [...indexArr, unknown]>;

// 1, 1, 2, 3, 5, 8, 13, 21, 34
type FibonacciRes = Fibonacci<7>;
