import { Author } from '@/types/author'

export interface Book{
  id: string,
  name: string,
  authorId: string,
  author?: Author
}
