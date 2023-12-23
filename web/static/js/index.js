import {
  AppView,
  ChatListView,
  ChatPlaceholderView,
  ChatListSearchView
} from './views/index.js'

import { ChatModel } from './models/chat.js'
import { ChatListModel } from './models/chatlist.js'
import { UserModel } from './models/user.js'
import { AppModel } from './models/app.js'

import { AppController } from './controllers/app.js'
import { ChatListController } from './controllers/chatlist.js'

import { ModelFactory } from './factories/model.js'
import { ViewFactory } from './factories/view.js'
import { ControllerFactory } from './factories/controller.js'

import { Context } from './context.js'


const modelFactory = new ModelFactory()
const viewFactory = new ViewFactory()
const controllerFactory = new ControllerFactory()

const chatListModel = new ChatListModel()
const chatListSearchView = new ChatListSearchView()
const chatListView = new ChatListView(chatListSearchView, chatListModel, viewFactory)
const chatListController = new ChatListController(chatListModel, chatListView, viewFactory)

const chatView = new ChatPlaceholderView()

const user = new UserModel('Asket')
const context = new Context(user)
const appModel = new AppModel(context)
const appView = new AppView(chatListView, chatView)
const appController = new AppController(appModel, appView, modelFactory, viewFactory, controllerFactory)

document.querySelector('body').replaceWith(appView.render())