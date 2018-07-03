'strict'

const store = require('../store')

const clearForm = function () {
  $('.form-group input').val('')
  console.log('clear has to run')
}

const signUpSuccess = function (signUpResponse) {
  $('#successful').toggleClass('hide').fadeOut(7000)
  clearForm()
  $('#myModal2').modal('toggle')
  console.log('the sign of response is', signUpResponse)
}

const signUpError = function (signUpError) {
  $('#failed').toggleClass('hide').fadeOut(3000)
  clearForm()
  console.log('sign up error is ', signUpError)
}

const signInSuccess = function (response) {
  console.log('this is a sign in success', response.user)
  $('#successfulSignIn').toggleClass('hide').fadeOut(3000)
  clearForm()
  $('#myModal').modal('toggle')
  $('.showDocPage').toggleClass('hide')
  $('#navTop').toggleClass('hide')
  store.user = response.user
  console.log(store.user)
}

const signInError = function (error) {
  console.log('error signing in', error)
  $('#failedSignIn').toggleClass('hide')
    .fadeOut(3000)
  clearForm()
  console.log('sign up error is ', signInError)
}

const signOutSuccess = function (signOutResponse) {
  $('#successfulSignOut').toggleClass('hide')
    .fadeOut(3000)
  $('#navTop').toggleClass('hide')
  $('.showDocPage').toggleClass('hide')
  console.log('signOutResponse is ', signOutResponse)
}

const signOutError = function (error) {
  console.log('Error in sign up is ', error)
  $('#failedSignOut').toggleClass('hide').fadeOut(3000)
}

const changePasswordSuccess = function () {
  $('#failedPassword').addClass('hide')
  $('#successfulPassword').removeClass('hide')
  console.log('password changed too')
}

const changePasswordFail = function () {
  $('#successfulPassword').addClass('hide')
  $('#failedPassword').removeClass('hide')
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
  changePasswordFail: changePasswordFail,
  clearForm
}
