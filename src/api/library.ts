/*
 * @Author: zehui zehui.1988@163.com
 * @Date: 2023-04-12 13:29:37
 * @LastEditors: zehui 842605246@qq.com
 * @LastEditTime: 2023-07-11 09:44:42
 * @FilePath: \zhlvChatGpt\src\api\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'
import { get } from '@/utils/request'
/**
 * 知识库卡片列表
 * @param data
 * @returns {AxiosPromise<any>}
 */
export function getMyList<T>(data: any) {
  return get<T>({
    url: '/isafeknowledge/knowledge-base/list',
    data,
  })
}
/* export async function getMyList(data: any) {
  return request({
    url: '/knowledge-base/list',
    method: 'get',
    data,
  })
} */

/**
 * 新增知识库
 * @param data
 * @returns {AxiosPromise}
 */
export function newLibrary(data: any) {
  return request({
    url: '/knowledge-base',
    method: 'post',
    data,
  })
}

// '删除知识库'
export function deleteLib(data: any) {
  return request({
    url: '/knowledge-base',
    method: 'delete',
    data,
  })
}

/**
 * 更新知识库
 * @param data
 * @returns {AxiosPromise}
 */
export function updateLibrary(data: any) {
  return request({
    url: '/knowledge-base/update',
    method: 'post',
    data,
  })
}

/**
 * 知识库选择，仅返回可使用的知识库
 * @param data
 * @returns {AxiosPromise}
 */
export function selectLibrary(data: any) {
  return request({
    url: '/knowledge-base/select',
    method: 'get',
    params: data,
  })
}

/**
 * 批量上传
 * @param data
 * @returns {AxiosPromise}
 */
export function uploadBatches(data: any, onUploadProgress: any) {
  return request({
    url: '/files',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  })
}

/**
 * 查询文件列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_files(data: any) {
  return request({
    url: '/files/list',
    method: 'get',
    params: data,
  })
}

// 删除文件
export function delete_files(data: any) {
  return request({
    url: '/files',
    method: 'delete',
    data,
  })
}

/**
 * 文件解析
 * @param data
 * @returns {AxiosPromise}
 */
export function startResolve(data: any) {
  return request({
    url: '/resolve/resume',
    method: 'post',
    data,
  })
}

/**
 * 重试解析失败的文件
 * @param data
 * @returns {AxiosPromise}
 */
export function retryResolve(data: any) {
  return request({
    url: '/resolve/retry-files',
    method: 'post',
    data,
  })
}

/**
 * 停止解析
 * @param data
 * @returns {AxiosPromise}
 */
export function stopResolve(data: any) {
  return request({
    url: '/resolve/stop',
    method: 'post',
    data,
  })
}
/**
 * 获取文件内容
 * @param data
 * @returns {AxiosPromise}
 */
export function getContent(data: any) {
  return request({
    url: '/files/pdf/download',
    method: 'get',
    responseType: 'blob',
    params: data,
  })
}

// 修改文件启用状态
/**
 * 停止解析
 * @param data
 * @returns {AxiosPromise}
 */
export function changeFileStatus(data: any) {
  return request({
    url: '/files/status',
    method: 'post',
    data,
  })
}
