import { ContactState } from '@/types/views/contact.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as ContactApi from '@/api/contact'

const state: ContactState = {
  author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<ContactState, any> = {
  author: (state: ContactState) => state.author
}

// 更改state
const mutations: MutationTree<ContactState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: ContactState, data: ContactState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<ContactState, any> = {
  UPDATE_STATE_ASYN({ commit, state: ContactState }, data: ContactState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Contact.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

