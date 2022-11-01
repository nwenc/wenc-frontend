<script setup lang="ts">
  import { useI18n } from "vue-i18n"

  export interface YiYanProps {
    content: string
    source?: string
  }

  const props = defineProps<YiYanProps>()
  const { t } = useI18n()
  const clickToCopy = t("yiYan.clickToCopy")

  const handleCopyToClipboard = () =>
    navigator.clipboard.writeText(props.content + " -- " + props.source)
</script>

<template>
  <div class="yiyan" v-on:click="handleCopyToClipboard">
    <div>
      <div class="row items-center">
        <div class="col">「 {{ props.content }} 」</div>
      </div>
      <div class="row items-center">
        <div class="col">
          <span class="yiyan-source">-- {{ props.source }}</span>
        </div>
      </div>
      <q-tooltip :delay="1000"> {{ clickToCopy }} </q-tooltip>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .yiyan {
    text-align: center;
  }

  .yiyan-source {
    opacity: 0;
    transition: 0.4s;
  }

  .yiyan:hover {
    .yiyan-source {
      opacity: 100;
    }
  }
</style>
