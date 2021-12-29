<template>
  <div class="home">
    Books
  </div>
  <BooksList :books="books" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BooksList from '@/components/BooksList.vue'
import { Book } from '@/types/book'

export default defineComponent({
  name: 'Home',
  components: { BooksList },
  setup () {
    const books: Book[] = [
      {
        id: '54321',
        name: 'Dralin',
        authorId: '12345',
        author: {
          name: 'John H Carroll',
          id: '12345'
        }
      },
      {
        id: '34242',
        name: 'Pelya',
        authorId: '12345',
        author: {
          name: 'John H Carroll',
          id: '12345'
        }
      }
    ]
    return { books }
  }

})
</script>

<style scoped lang="scss">
.home {
  font-size: 3rem;
}
</style>
