<template>
  <div v-for="book in books" :key="book.id">
    <BookPreview :book="book"/>
  </div>
</template>

<script lang="ts">
import { Book } from '@/types/book'
import { PropType } from 'vue'
import BookPreview from '@/components/BookPreview.vue'

export default {
  name: 'BooksList',
  components: { BookPreview },
  props: {
    books: {
      type: Array as PropType<Book[]>,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
