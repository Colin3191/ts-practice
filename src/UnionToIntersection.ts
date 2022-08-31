type UnionToIntersection<U> = (
  U extends U ? (x: U) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never;

type UnionToIntersectionRes = UnionToIntersection<
  { a: string } | { b: number }
>;