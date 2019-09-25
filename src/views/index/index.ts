import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { IndexData } from '@/types/views/index.interface'
// import {  } from "@/components" // 组件
import * as IndexApi from '@/api/index'

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author
  
  // Action
  @Action('index') GET_DATA_ASYN

  // data
  data: IndexData = {
    pageName: 'index'
  }

  created() {
    IndexApi.getData({ name: 'Chilly' }).then(data => {
      console.log(data, 'test')
    })
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
