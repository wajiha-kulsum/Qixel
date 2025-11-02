export type ComponentProp = {
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  description?: string;
};

export type Example = {
  title: string;
  code: string;
};

export type RegistryItem = {
  slug: string;
  name: string;
  category: string;
  description?: string;
  // Where to import the component from and which export to use
  modulePath: string;
  exportName: string;
  // The code users will copy-paste
  sourceCode: string;
  // Optional installation instructions
  install?: string;
  // Optional customization notes
  customization?: string;
  // Dependencies and tags for filtering
  dependencies?: string[];
  tags?: string[];
  // Props and example snippets
  props?: ComponentProp[];
  examples?: Example[];
};

export type Registry = RegistryItem[];


