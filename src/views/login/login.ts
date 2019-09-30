import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { LoginData } from '@/types/views/login.interface'
import { Button } from "mint-ui"
import * as LoginApi from '@/api/login'

@Component({
  components: {
    [Button.name]: Button
  }
})
export default class About extends Vue {
  // Getter
  @Getter('author2') public author2!: any
  
  // Action
  @Action('GET_DATA_ASYN2') public GET_DATA_ASYN2!: any

  // data
  data: LoginData = {
    pageName: 'hello'
  }

  created() {
    // this.GET_DATA_ASYN2({ author2: '123' })
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
