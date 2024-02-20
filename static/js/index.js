import {
  AppView,
  ChatListView,
  ChatPlaceholderView,
  ChatListSearchView
} from './views/index.js'

import { ChatListModel } from './models/chatlist.js'
import { UserModel } from './models/user.js'
import { AppModel } from './models/app.js'

import { AppController } from './controllers/app.js'
import { ChatListController } from './controllers/chatlist.js'

import { ModelFactory } from './factories/model.js'
import { ViewFactory } from './factories/view.js'
import { ControllerFactory } from './factories/controller.js'

import { Context } from './context.js'
import { SocketClient } from './socket.js'


const modelFactory = new ModelFactory()
const viewFactory = new ViewFactory()
const controllerFactory = new ControllerFactory()

const chatListModel = new ChatListModel()
const chatListSearchView = new ChatListSearchView()
const chatListView = new ChatListView(chatListSearchView, chatListModel, viewFactory)
const chatListController = new ChatListController(chatListModel, chatListView, viewFactory, controllerFactory)

const chatView = new ChatPlaceholderView()

const user = new UserModel('Asket')
const context = new Context(user)
const appModel = new AppModel(context)
const appView = new AppView(chatListView, chatView)
const appController = new AppController(appModel, appView, modelFactory, viewFactory, controllerFactory)

document.querySelector('body').replaceWith(appView.render())

const userModel = new UserModel('Alex')
const chatModel = modelFactory.createChatModel(userModel)

const userModel2 = new UserModel('Gleb')
const chatModel2 = modelFactory.createChatModel(userModel2)

chatListModel.addChat(chatModel)
chatListModel.addChat(chatModel2)


const socketConnection = new WebSocket('ws://' + window.location.host)
const socketClient = new SocketClient(socketConnection, { user: context.user })

socketConnection.addEventListener('open', () => {
  socketClient.emit('message', { text: 'text' })
})


