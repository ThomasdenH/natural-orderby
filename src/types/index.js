// @flow
export type CompareFn = (valueA: mixed, valueB: mixed) => number;

export type CaseSensitive = boolean;

export type OrderEnum = 'asc' | 'desc';

export type Order = OrderEnum | CompareFn;

export type CompareOptions = {|
  caseSensitive?: CaseSensitive,
  order?: OrderEnum,
|};

export type BaseCompareOptions = {|
  caseSensitive: CaseSensitive,
  order: Order,
|};

export type IdentifierFn<T> = (value: T) => mixed;

export type Identifier<T> = IdentifierFn<T> | string;

export type ParsedNumber = number;

export type Chunk = string | number;

export type Chunks = $ReadOnlyArray<Chunk>;

export type MappedValueRecord = {|
  parsedNumber?: ParsedNumber,
  chunks?: Chunks,
  isArray?: boolean,
  isFunction?: boolean,
  isNaN?: boolean,
  isNull?: boolean,
  isObject?: boolean,
  isSymbol?: boolean,
  isUndefined?: boolean,
  value: mixed,
|};

type MappedValues = $ReadOnlyArray<MappedValueRecord>;

export type MappedRecord = {|
  index: number,
  values: MappedValues,
|};

export type MappedCollection = Array<MappedRecord>;
