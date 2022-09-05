# TypeScript 类型练习

## 四则运算

非负整数的四则运算

### BuildArray

根据数组长度构造数组

```typescript
type BuildArray<
  Length extends number,
  Item extends unknown = unknown,
  Arr extends unknown[] = []
> = Arr["length"] extends Length
  ? Arr
  : BuildArray<Length, Item, [...Arr, Item]>;
```

### Add

构造数组 -> 合并数组 -> 求合并后的数组的长度

```typescript
Add<Num1 extends number, Num2 extends number> = [
  ...BuildArray<Num1>,
  ...BuildArray<Num2>
]["length"];
```

### Subtract

extends + infer, Rest 的长度就是两数相减的结果

```typescript
type Subtract<
  Num1 extends number,
  Num2 extends number
> = BuildArray<Num1> extends [...BuildArray<Num2>, ...infer Rest]
  ? Rest["length"]
  : never;
```

### Mutiply

Num1 \* Num2 可以看成 Num2 个 Num1 相加（或者 Num1 个 Num2 相加），
使用中间变量`ResultArr`来保存并传递每次递归的结果。
每次递归使`ResultArr`里的长度增加 Num1，相应的让 Num2 减 1，递归结束时`ResultArr`的长度就是最终的结果。

```typescript
type Mutiply<
  Num1 extends number,
  Num2 extends number,
  ResultArr extends unknown[] = []
> = Num2 extends 0
  ? ResultArr["length"]
  : Mutiply<Num1, Subtract<Num2, 1>, [...BuildArray<Num1>, ...ResultArr]>;
```

## Divide

Num1 / Num2 可以看成 Num1 能够被 Num2 减多少次，直到 Num1 被减完。`CountArr`用来传递每次递归计算的结果。

```typescript
Divide<
  Num1 extends number,
  Num2 extends number,
  CountArr extends unknown[] = []
> = Num1 extends 0
  ? CountArr["length"]
  : Divide<Subtract<Num1, Num2>, Num2, [...CountArr, unknown]>;
```
