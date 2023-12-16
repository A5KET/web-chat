import { ChatView, ChatHistoryView, ChatInputView } from './views.js'
import { ChatController, ChatHistoryController } from './controllers.js'
import { User, ChatModel, ChatHistoryModel, TextMessageModel } from './models.js'
import { Context } from './context.js'
import { ViewFactory, ModelFactory } from './factories.js'
import { getCurrentTime } from './time.js'
import { MessageType } from './types.js'


function createChat(username) {
  
}


const chatHistoryView = new ChatHistoryView()
const chatInput = new ChatInputView()
const chatView = new ChatView(chatHistoryView, chatInput)

const viewFactory = new ViewFactory()
const modelFactory = new ModelFactory()

const user = new User('testUser')
const context = new Context(user)
const chatModel = new ChatModel()
const chatHistoryModel = new ChatHistoryModel()

chatHistoryModel.addMessage(
  new TextMessageModel(user, 'first message')
)

const chatController = new ChatController(chatModel, chatView, context, modelFactory, viewFactory)
const chatHistoryController = new ChatHistoryController(chatHistoryModel, chatHistoryView, viewFactory)


document.querySelector('main').appendChild(chatView.render())

const receivedMessage = modelFactory.createTextMessageModel(context.user, 'random text', getCurrentTime(), MessageType.Received)
chatHistoryModel.addMessage(receivedMessage)