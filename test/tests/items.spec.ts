import { describe, it, expect } from 'vitest'
import {
  getItems,
  addItem,
  updateItem,
  deleteItem
} from '../../src/db/item.db'

describe('CRUD operations', () => {
  it('should add an item', () => {
    addItem({ id: 3, name: 'Item Three' })
    expect(getItems().find((i) => i.id === 3)?.name).toBe('Item Three')
  })

  it('should update an item', () => {
    updateItem(3, 'Updated Item')
    expect(getItems().find((i) => i.id === 3)?.name).toBe('Updated Item')
  })

  it('should delete an item', () => {
    deleteItem(3)
    expect(getItems().find((i) => i.id === 3)).toBeUndefined()
  })
})
