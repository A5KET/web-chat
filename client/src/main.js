import { createApp } from 'vue'
import axios from 'axios'

import App from './App.vue'
import { ChatService } from './services.js'


const apiClient = axios.create({
  baseURL: '/api'
})
const socket = new ChatSocket()
const chatService = new ChatService(apiClient)

createApp(App, { messageService, chatService }).mount('#app')
