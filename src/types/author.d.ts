import { Book } from '@/types/book'

export interface Author{
  id: string,
  name: string,
  books?: Book[]
}
