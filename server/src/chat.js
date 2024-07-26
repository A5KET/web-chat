import { defaultSocketClientConstructor } from './socket.js'
import { verifyUser } from './auth.js'


function chatSocketClientConstructor(connection, auth) {
  const client = defaultSocketClientConstructor(connection, auth)
  
  try {
    verifyUser(auth.user)
  } catch (error) {
    
  }
}
