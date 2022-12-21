import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import components from '@/components/UI'

import Unicon from 'vue-unicons'
import { uniArrowDown } from 'vue-unicons/dist/icons'
Unicon.add([uniArrowDown])

const app = createApp(App)
app.use(Unicon)
components.forEach(component => {
    app.component(component.name, component)
});

app.mount('#app')
