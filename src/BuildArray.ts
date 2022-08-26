export type BuildArray<
  Length extends number,
  Item extends unknown = unknown,
  Arr extends unknown[] = []
> = Arr["length"] extends Length
  ? Arr
  : BuildArray<Length, Item, [...Arr, Item]>;

type BuildArrayRes = BuildArray<5, 1>;
