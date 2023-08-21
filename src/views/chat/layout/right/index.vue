<script setup lang='ts'>
import type { CSSProperties } from 'vue'
import List from './List.vue'
import { useAppStore } from '@/store'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { PromptStore } from '@/components/common'
import plus from '@/assets/plus.svg'
const appStore = useAppStore()

const { isMobile } = useBasicLayout()
const show = ref(false)

const collapsed = computed(() => appStore.knowledge)

function handleUpdateCollapsed() {
  appStore.setKnowledge(!collapsed.value)
}

const getMobileClass = computed<CSSProperties>(() => {
  if (isMobile.value) {
    return {
      zIndex: 50,
    }
  }
  return {}
})

const mobileSafeArea = computed(() => {
  if (isMobile.value) {
    return {
      paddingBottom: 'env(safe-area-inset-bottom)',
    }
  }
  return {
  }
})

watch(
  isMobile,
  (val) => {
    appStore.setKnowledge(val)
  },
  {
    immediate: true,
    flush: 'post',
  },
)
</script>

<template>
  <NLayoutSider
    :collapsed="collapsed"
    collapse-mode="width"
    :collapsed-width="0"
    :width="340"
    :native-scrollbar="true"
    :show-trigger="isMobile ? (collapsed ? false : 'arrow-circle') : 'arrow-circle'"
    bordered

    :style="getMobileClass"
    @update-collapsed="handleUpdateCollapsed"
  >
    <div class="flex flex-col h-full bg-[#f5f5f5]" :style="mobileSafeArea">
      <main class="flex flex-col flex-1 min-h-0">
        <div class="p-4">
          <n-card class=" !rounded-2xl">
            <template #header>
              <div class="flex cursor-pointer items-center w-[88%]">
                <img :src="plus" style="width: 32px; height: fit-content;">
                <span class="text-ellipsis overflow-hidden inline-block whitespace-nowrap ml-3">新建知识库</span>
              </div>
            </template>
            <p>点击知识库标题进入知识库管理</p>
          </n-card>
        </div>
        <div class="flex-1 min-h-0 pb-4 overflow-hidden">
          <List />
        </div>
      </main>
    </div>
  </NLayoutSider>
  <template v-if="isMobile">
    <div v-show="!collapsed" class="fixed inset-0 z-40 w-full h-full bg-black/40" @click="handleUpdateCollapsed" />
  </template>
  <PromptStore v-model:visible="show" />
</template>
