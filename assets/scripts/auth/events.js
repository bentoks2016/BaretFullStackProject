'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('the form was submitted')

  const data = getFormFields(event.target)
  console.log('data is ', data)

  authApi.signUp(data)
    .then(function (signUpResponse) {
      $('#successful').toggleClass('hide')
      console.log('the sign of response is', signUpResponse)
    })

    .catch(function (signUpError) {
      $('#failed').toggleClass('hide')
      console.log('sign up error is ', signUpError)
    })
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('this is the sign in part')

  const data = getFormFields(event.target)

  authApi.signIn(data)

    .then(ui.signInSuccess)

    .catch(ui.signInError)
}

// For Signing Out
const onSignOut = function (event) {
  event.preventDefault()

  authApi.signOut(event)

    .then(ui.signOutSuccess)

    .catch(ui.signOutError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Please accept new passowrd')
  authApi.passwordChange(data)

    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onSignOut: onSignOut,
  onChangePassword: onChangePassword
}
