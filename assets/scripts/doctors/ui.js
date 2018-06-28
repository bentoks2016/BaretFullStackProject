'strict'

const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is ', signUpResponse)
}

const signUpError = function (error) {
  console.log('Error in sign up is ', error)
}

const signInSuccess = function (response) {
  console.log('this is a sign in success', response.user)
  store.user = response.user
  console.log(store.user)
}

const signInError = function (error) {
  console.log('error signing in', error)
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpError: signUpError,
  signInSuccess: signInSuccess,
  signInError: signInError
}
