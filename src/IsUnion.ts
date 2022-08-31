type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never;

type IsUnionRes = IsUnion<1 | 2 | 3>;
