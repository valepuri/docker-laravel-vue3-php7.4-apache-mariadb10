require('./bootstrap');
//Vue 3
import { createApp } from 'vue'


import TestComponent from './components/Test'
import ApiComponent from './components/Api'

const app = createApp({})

app.component('test-component', TestComponent)
app.component('api-component', ApiComponent)

app.mount('#app')

