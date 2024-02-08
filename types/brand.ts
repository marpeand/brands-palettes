type HexadecimalColor = `#${string}`;

export interface Brand {
  [category: string]: {
    [brand: string]: HexadecimalColor[];
  };
}
