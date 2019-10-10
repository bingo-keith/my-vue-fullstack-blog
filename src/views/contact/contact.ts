import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { ContactData } from '@/types/views/contact.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author
  
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: ContactData = {
    pageName: 'contact'
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
