import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { EssayData } from '@/types/views/essay.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author
  
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: EssayData = {
    pageName: 'essay'
  }

  created() {
    //
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
