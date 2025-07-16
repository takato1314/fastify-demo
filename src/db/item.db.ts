export interface Item {
  id: number;
  name: string;
}

export let items: Item[] = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Item Two' }
]

export const getItems = () => items

export const getItemById = (id: number) => {
  return items.find((item) => item.id === id)
}

export const addItem = (item: Item) => {
  items.push(item)
}

export const updateItem = (id: number, name: string) => {
  const item = items.find((i) => i.id === id)
  if (item) item.name = name
}

export const deleteItem = (id: number) => {
  items = items.filter((i) => i.id !== id)
}
