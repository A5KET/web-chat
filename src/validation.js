const errors = require('./errors.js')


function validateAuth(auth) {
  try {
    auth = JSON.parse(auth)
  } catch (error) {
    switch (error) {
      case error instanceof SyntaxError:
        throw new errors.AuthError('JSON parse error')
    }
  }

  if (!auth.hasOwnProperty('username')) {
    throw new errors.AuthError('username missing')
  }

  return auth
}


module.exports = {validateAuth}
