import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { LoginData } from '@/types/views/login.interface'
// import {  } from "@/components" // 组件
import * as LoginApi from '@/api/login'

@Component({})
export default class About extends Vue {
  // Getter
  @Getter author
  
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: LoginData = {
    pageName: 'hello'
  }

  created() {
    // this.GET_DATA_ASYN()
  }
  
  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
    
}
