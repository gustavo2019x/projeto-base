//import { App } from 'vue'
import './style.css'
//import Inicio from './Inicio.vue'
//createApp(Inicio).mount('#app')


// export individual components
//import HeaderPadrao from './components/HeaderPadrao.vue';

//export { HeaderPadrao };

// export the entire library as a plugin, so it can be installed via app.use()
// comment this out if you don't want to install the entire library

// export default {
//   install: (app: App) => {
//     app.component('HeaderPadrao', HeaderPadrao);
//   },
// };
export { default as HeaderPadrao } from './components/HeaderPadrao.vue';