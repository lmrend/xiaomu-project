import Vue from 'vue'
import dayjs from "dayjs";
import 'dayjs/locale/zh-cn'
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

dayjs.locale('zh-cn')
Vue.filter('relativeTime', value => {
    /* value = value - 15 */
    return (dayjs().to(dayjs(value))) 
})