import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { IndexData } from '@/types/views/index.interface'
import {
  Button,
  Progress,
  Field
} from "mint-ui"
import * as IndexApi from '@/api/index'
import {
  BaiduMap,
  BmGeolocation,
  BmNavigation,
  BmLocalSearch,
  BmMapType,
  BmScale,
  BmPanorama,
  BmTraffic
} from 'vue-baidu-map'

@Component({
  components: {
    [Button.name]: Button,
    [Progress.name]: Progress,
    [Field.name]: Field,
    BaiduMap,
    BmGeolocation,
    BmNavigation,
    BmLocalSearch,
    BmMapType,
    BmScale,
    BmPanorama,
    BmTraffic
  }
})
export default class About extends Vue {
  // Getter
  // @Getter author
  
  // Action
  @Action('index') GET_DATA_ASYN

  // data
  data: IndexData = {
    pageName: 'index',
    center: {
      lng: 0,
      lat: 0
    },
    zoom: 3,
    traffic: {
      weekday: 7, // 星期天
      hour: 12 // 十二点
    },
    showContactForm: true
  }

  created() {
    IndexApi.getList().then(data => {
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

  handler({ BMap, map }) {
    this.data.center.lng = 114.30
    this.data.center.lat = 30.60
    this.data.zoom = 15
    // 鼠标缩放
    map.enableScrollWheelZoom(true)
  }

  handleSubmit() {
    this.data.showContactForm = false
  }
    
}
