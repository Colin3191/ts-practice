// anyl类型与任何类型交叉都是any, 任何类型extends any都是true
type IsAny<T> = 1 extends T & 2 ? true : false;

type IsAnyRes = IsAny<any>;
