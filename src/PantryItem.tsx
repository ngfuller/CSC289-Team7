const fs = require('react-native-fs');
const path: string = fs.DocumentDirectoryPath + '/items.json';

export interface PantryItem {
  name: string;
  quantity: number;
}

const examplePantryItems: PantryItem[] = [
  {
    name: 'Chips',
    quantity: 1,
  },
  {
    name: 'Cereal',
    quantity: 12,
  },
  {
    name: 'Water',
    quantity: 13,
  },
  {
    name: 'Soda',
    quantity: 41,
  },
  {
    name: 'Cookies',
    quantity: 11,
  },
  {
    name: 'Bread',
    quantity: 3,
  },
];

export function writePantryItems(): void {
  fs.writeFile(path, JSON.stringify(examplePantryItems), 'utf8');
}

export async function loadPantryItems(): Promise<PantryItem[]> {
  const fileData: string = await fs.readFile(path, 'utf8');
  return Promise.resolve(JSON.parse(fileData).map((u: any) => u as PantryItem));
}
