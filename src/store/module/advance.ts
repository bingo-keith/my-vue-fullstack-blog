import { AdvanceState } from '@/types/views/advance.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as AdvanceApi from '@/api/advance'

const state: AdvanceState = {
  author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<AdvanceState, any> = {
  author: (state: AdvanceState) => state.author
}

// 更改state
const mutations: MutationTree<AdvanceState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: AdvanceState, data: AdvanceState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<AdvanceState, any> = {
  UPDATE_STATE_ASYN({ commit, state: AdvanceState }, data: AdvanceState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Advance.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

