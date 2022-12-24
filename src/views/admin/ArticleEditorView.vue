<script setup lang="ts">
  import { ref } from "vue"
  import Editor from "@tinymce/tinymce-vue"

  const content = ref()
</script>

<template>
  <div class="q-pa-md">
    <div class="row article-editor">
      <div class="col">
        <Editor
          :init="{ width: '100%' }"
          v-model="content"
          class="tinymce-editor"
        />
      </div>
      <div class="col">
        <div class="tinymce-preview" v-html="content"></div>
      </div>
      <!-- <textarea style="width: 100%; height: 200px" v-model="content"></textarea> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
  .article-editor {
    width: 100%;
  }
</style>
