declare namespace GUtil {
  /** 转成类似 class 的接口类型，可使用 new 方法创建对象 */
  type ToClassType<T extends TwoFunctionTypes> = T extends NewFunctionType
    ? T
    : (new (...args: ArgsType<T>) => {}) & ExcludeFunctionType<T>;

  /** 排除接口 T 中的 () => any 和 new () => any */
  type ExcludeFunctionType<T> = Overwrite<T, {}>;

  type FunctionType = (...args: any[]) => any;
  type NewFunctionType = new (...args: any[]) => any;
  type TwoFunctionTypes = FunctionType | NewFunctionType;

  /** 获取函数的参数 */
  type ArgsType<T extends TwoFunctionTypes> = T extends (...args: infer U) => any
    ? U
    : T extends new (...args: infer U) => any
    ? U
    : [];

  /** 获取 new 方法返回的实例类型 */
  type NewReturnType<T extends NewFunctionType> = T extends new (...args: any[]) => infer U
    ? U
    : any;

  /** 获取 prototype */
  type ProtoType<T> = T extends NewFunctionType ? NewReturnType<T> : T;

  type _Overwrite<T, U> = U extends null | undefined
    ? T
    : { [P in Exclude<keyof T, keyof U>]: T[P] } & U;

  type _Overwrite2<T, U1, U2> = _Overwrite<_Overwrite<T, U1>, U2>;
  type _Overwrite3<T, U1, U2, U3> = _Overwrite<_Overwrite2<T, U1, U2>, U3>;
  type _Overwrite4<T, U1, U2, U3, U4> = _Overwrite<_Overwrite3<T, U1, U2, U3>, U4>;
  type _Overwrite5<T, U1, U2, U3, U4, U5> = _Overwrite<_Overwrite4<T, U1, U2, U3, U4>, U5>;
  type _Overwrite6<T, U1, U2, U3, U4, U5, U6> = _Overwrite<_Overwrite5<T, U1, U2, U3, U4, U5>, U6>;

  /** 混合并覆盖接口的属性 */
  type Overwrite<
    T,
    U1,
    U2 = undefined,
    U3 = undefined,
    U4 = undefined,
    U5 = undefined,
    U6 = undefined
  > = _Overwrite6<T, U1, U2, U3, U4, U5, U6>;

  /** 联合类型转为交叉类型 */
  type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((
    k: infer I
  ) => void)
    ? I
    : never;

  /**
   * Checks if a type is a union type.
   * @returns true or false
   */
  type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

  /** 提取联合类型中每个类型的某些属性类型 */
  type UnionPick<T, K extends string> = T extends {} ? (K extends keyof T ? T[K] : {}) : never;

  /** 混合数组中每个元素的类型或者每个元素的某个属性的类型 */
  type MixArray<T extends any[], K extends string | undefined = undefined> = T extends Array<
    infer U
  >
    ? UnionToIntersection<K extends string ? UnionPick<U, K> : U>
    : never;

  /** Used only for typings of subclass.superclass when util.extend(subclass, superclass) */
  function extendSuperclass<T extends NewFunctionType>(
    superclass: T
  ): ProtoType<T> & { prototype: ProtoType<T>; constructor: Exclude<T, keyof T> };
}
