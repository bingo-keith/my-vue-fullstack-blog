import { TestState } from '@/types/views/test.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as TestApi from '@/api/test'

const state: TestState = {
  author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<TestState, any> = {
  author: (state: TestState) => state.author
}

// 更改state
const mutations: MutationTree<TestState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: TestState, data: TestState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<TestState, any> = {
  UPDATE_STATE_ASYN({ commit, state: TestState }, data: TestState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Test.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

