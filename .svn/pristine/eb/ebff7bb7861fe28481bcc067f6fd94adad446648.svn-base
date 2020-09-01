import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/base.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Video from 'video.js';
import 'video.js/dist/video-js.css';
import 'swiper/css/swiper.css';
import 'vant/lib/index.css';
// import axios from "axios";
// Vue.prototype.$axios = axios;
import { Picker } from 'vant';
import { Popup} from 'vant';
import { Toast } from 'vant';
import { Area } from 'vant';
import { DatetimePicker } from 'vant';

Vue.use(DatetimePicker);
Vue.use(Area);
Vue.use(Popup);
Vue.use(Toast);
Vue.use(Picker);
Vue.config.productionTip = false;
Vue.prototype.$video = Video;
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
	if (to.meta.content) {
		let head = document.getElementsByTagName('head');
		let meta = document.createElement('meta');
		document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.content.keywords);
		document.querySelector('meta[name="description"]').setAttribute('content', to.meta.content.description);
		meta.content = to.meta.content;
		head[0].appendChild(meta)
	}
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next()
});
new Vue({
	router,
	store,
	data:{
		eventVue:new Vue()
	},
	render: h => h(App),
	mounted () {
		document.dispatchEvent(new Event('render-event'))
	}
}).$mount('#app');
