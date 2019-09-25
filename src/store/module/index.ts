import { IndexState } from '@/types/views/index.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as IndexApi from '@/api/index'

const state: IndexState = {
  author1: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<IndexState, any> = {
  author1: (state: IndexState) => state.author1
}

// 更改state
const mutations: MutationTree<IndexState> = {
  // 更新state都用该方法
  UPDATE_STATE1(state: IndexState, data: IndexState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<IndexState, any> = {
  UPDATE_STATE_ASYN1({ commit, state: IndexState }, data: IndexState) {
    commit('UPDATE_STATE1', data)
  },
  GET_DATA_ASYN1({ commit, state: LoginState }) {
    IndexApi.getData({ name: 'zs' }).then(res => {
      commit('UPDATE_STATE1')
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

