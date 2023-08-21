import { defineStore } from 'pinia'
import { deleteLib, getMyList, updateLibrary } from '@/api/library'
const pagination = reactive({
  page: 1,
  size: 11,
})
export const useknowledgeStore = defineStore('knowledge-store', {
  state: () => {
    return {
      knowledgeList: [] as any,
    }
  },

  actions: {
    async getKnowledgeList() {
      const { data } = await getMyList({
      })
      this.knowledgeList = data
    },
    async updateKnowledge(data: any) {
      await updateLibrary(data)
    },
    async deleteKnowledge(data: any) {
      await deleteLib(data)
    },
  },
})
