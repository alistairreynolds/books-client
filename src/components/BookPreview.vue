<template>
  <h2>{{ book.name }}</h2>
  <p>{{ book.author.name }}</p>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { Book } from '@/types/book'

export default {
  name: 'BookPreview',
  props: {
    book: {
      type: Object as PropType<Book>,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
