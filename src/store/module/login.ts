import { LoginState } from '@/types/views/login.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as LoginApi from '@/api/login'

const state: LoginState = {
  author2: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<LoginState, any> = {
  author2: (state: LoginState) => state.author2
}

// 更改state
const mutations: MutationTree<LoginState> = {
  // 更新state都用该方法
  UPDATE_STATE2(state: LoginState, data: LoginState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<LoginState, any> = {
  UPDATE_STATE_ASYN2({ commit, state: LoginState }, data: LoginState) {
    commit('UPDATE_STATE2', data)
  },
  GET_DATA_ASYN2({ commit, state: LoginState }) {
    LoginApi.getData().then(res => {
      console.log(res)
      commit('UPDATE_STATE2')
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

