type HAS_CHILDREN = true;

interface BaseProps<CHILDREN extends boolean = false> {
  className?: string;
  style?: React.CSSProperties;
  children?: CHILDREN extends true ? React.ReactNode : never;
}
