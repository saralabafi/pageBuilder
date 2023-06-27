interface ISelectComponent {
  id?: string;
  size?: string;
  selectedIcon?: string;
  label: string;
  options: any;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  placeholder?: string;
  direction?: "flex" | "flex-col";
  value: string;
  onChange: (obj: any) => void;
}

type Flex_Direction = {
  row: "flex";
  column: "flex-col";
};
