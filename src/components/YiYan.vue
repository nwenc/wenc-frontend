<script setup lang="ts">
  export interface YiYanProps {
    content: string
    source?: string
  }

  const props = defineProps<YiYanProps>()

  const handleCopyToClipboard = () =>
    navigator.clipboard.writeText(props.content + " -- " + props.source)
</script>

<template>
  <div class="yiyan" v-on:click="handleCopyToClipboard">
    <el-tooltip effect="dark" content="点击左键复制" :show-after="1000">
      <div>
        <el-row justify="center">
          <el-col :span="6">「 {{ props.content }} 」</el-col>
        </el-row>
        <el-row justify="center">
          <el-col :span="6">
            <span class="yiyan-source">-- {{ props.source }}</span>
          </el-col>
        </el-row>
      </div>
    </el-tooltip>
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
