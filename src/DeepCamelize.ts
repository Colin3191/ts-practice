import { Camelcase } from "./Camelcase";

type DeepCamelizeArr<Arr> = Arr extends [infer First, ...infer Rest]
  ? [DeepCamelize<First>, ...DeepCamelizeArr<Rest>]
  : [];

type DeepCamelize<Obj> = Obj extends unknown[]
  ? DeepCamelizeArr<Obj>
  : {
      [Key in keyof Obj as Camelcase<Key & string>]: DeepCamelize<Obj[Key]>;
    };

type obj = {
  aaa_bbb: string;
  bbb_ccc_ddd: [
    {
      ccc_ddd: string;
    },
    {
      ddd_eee: string;
      eee_fff: {
        fff_ggg: string;
      };
    }
  ];
};

type DeepCamelizeRes = DeepCamelize<obj>;
