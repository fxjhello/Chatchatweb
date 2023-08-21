<script setup lang='ts'>
import { computed } from 'vue'
import { NScrollbar } from 'naive-ui'
import { SvgIcon } from '@/components/common'
import { useknowledgeStore } from '@/store'
import { useIconRender } from '@/hooks/useIconRender'
import folderSvg from '@/assets/folder.svg'
const { iconRender } = useIconRender()

const knowledgeStore = useknowledgeStore()
const dataSources = computed(() => knowledgeStore.knowledgeList)

// 操作知识库
const options = [

  {
    label: '重命名',
    key: 'rename',
    icon: iconRender({ icon: 'ri:edit-line' }),
  },
  {
    label: '删除',
    key: 'delete',
    icon: iconRender({ icon: 'ri:delete-bin-line' }),
  },
]
const handleSelect = (key: string | number) => {
}
const scrollEvent = (e: { srcElement: { scrollTop: any; clientHeight: any; scrollHeight: any } }) => {
  if (e.srcElement.scrollTop + e.srcElement.clientHeight === e.srcElement.scrollHeight)
    console.log('嘿嘿我在底部触发了')
}
onMounted(() => {
  knowledgeStore.getKnowledgeList()
})
</script>

<template>
  <NScrollbar class="px-4" @scroll="scrollEvent">
    <div class="flex flex-col gap-2 text-sm">
      <template v-if="!dataSources.length">
        <div class="flex flex-col items-center mt-4 text-center text-neutral-300">
          <SvgIcon icon="ri:inbox-line" class="mb-2 text-3xl" />
          <span>{{ $t('common.noData') }}</span>
        </div>
      </template>
      <template v-else>
        <div v-for="(item, index) of dataSources" :key="index">
          <n-card class=" !rounded-2xl">
            <template #header>
              <div class="flex cursor-pointer items-center w-[88%]">
                <img :src="folderSvg" style="width: 32px; height: fit-content;">
                <span class="text-ellipsis overflow-hidden inline-block whitespace-nowrap ml-3">{{ item.name }}</span>
              </div>
            </template>
            <template #header-extra>
              <n-dropdown trigger="hover" :options="options" @select="handleSelect">
                <span class="text-2xl text-[#407cff] cursor-pointer rotate-90"> ... </span>
              </n-dropdown>
            </template>
            {{ item.remarks.length > 0 ? item.remarks : '请为知识库添加简介吧!' }}
            <br>
            <br>
            <br>
            <template #footer>
              <div class="flex">
                <span class="flex algin-center ">
                  <SvgIcon icon="material-symbols:file-copy-outline" class="  text-lg  " />
                  <span>文档</span>
                  <span style="color:#2D384E;margin-left: 5px;">{{ item.docCount }}</span>
                </span>
                <span class="flex algin-center ml-6">
                  <SvgIcon icon="material-symbols:attach-file" class=" text-lg " />
                  <span>关联</span>
                  <span style="color:#2D384E;margin-left: 5px;">{{ item.conversationCount }}</span>
                </span>
                <span class="flex algin-center ml-6">
                  <SvgIcon icon="mdi:target" class=" text-lg " />
                  <span>命中</span>
                  <span style="color:#2D384E;margin-left: 5px;">{{ item.hitCount }}</span>
                </span>
              </div>
            </template>
          </n-card>
        </div>
      </template>
    </div>
  </NScrollbar>
</template>
