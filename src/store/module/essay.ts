import { EssayState } from '@/types/views/essay.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as EssayApi from '@/api/essay'

const state: EssayState = {
  author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<EssayState, any> = {
  author: (state: EssayState) => state.author
}

// 更改state
const mutations: MutationTree<EssayState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: EssayState, data: EssayState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<EssayState, any> = {
  UPDATE_STATE_ASYN({ commit, state: EssayState }, data: EssayState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Essay.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

