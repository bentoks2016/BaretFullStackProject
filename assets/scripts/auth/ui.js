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
  $('#successfulSignIn').toggleClass('hide')
  $('.showDocPage').toggleClass('hide')
  store.user = response.user
  console.log(store.user)
}

const signInError = function (error) {
  console.log('error signing in', error)
  $('#failedSignIn').toggleClass('hide')
  console.log('sign up error is ', signInError)
}

const signOutSuccess = function (signOutResponse) {
  $('#successfulSignOut').toggleClass('hide')
  console.log('signOutResponse is ', signOutResponse)
}

const signOutError = function (error) {
  console.log('Error in sign up is ', error)
  $('#failedSignOut').toggleClass('hide')
}

const changePasswordSuccess = function () {
  $('#successfulPassword').toggleClass('hide')
  console.log('password changed too')
}

const changePasswordFail = function () {
  $('#failedPassword').toggleClass('hide')
  console.log('change failed')
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpError: signUpError,
  signInSuccess: signInSuccess,
  signInError: signInError,
  signOutSuccess: signOutSuccess,
  signOutError: signOutError,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFail: changePasswordFail
}
