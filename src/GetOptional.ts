type GetOptional<Obj extends Record<string, any>> = {
  [Key in keyof Obj as {} extends { [K in Key]: Obj[K] }
    ? Key
    : never]: Obj[Key];
};

type GetOptionalRes = GetOptional<{ a: 1; b?: 2 }>;
