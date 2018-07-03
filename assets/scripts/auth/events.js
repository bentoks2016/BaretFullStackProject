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
    .then(ui.signUpSuccess)

    .catch(ui.signUpError)
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

$(document).ready(function () {
  $('#myBtn').click(function () {
    $('#myModal').modal()
  })
})

$(document).ready(function () {
  $('#myBtn2').click(function () {
    $('#myModal2').modal()
  })
})

const showSignUp = function () {
  console.log('hide/show modal')
  $('#myModal').modal('hide')
  console.log('hide/show modal  for real')
  $('#myModal2').modal('show')
}
const showSignIn = function () {
  console.log('hide/show modal')
  $('#myModal2').modal('hide')
  $('#myModal').modal('show')
  console.log('modal show end here')
}
module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onSignOut: onSignOut,
  onChangePassword: onChangePassword,
  showSignUp,
  showSignIn
}
