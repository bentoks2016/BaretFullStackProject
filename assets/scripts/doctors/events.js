'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const docApi = require('./api.js')
const DocUi = require('./ui.js')

const onCreateDoctor = function (event) {
  event.preventDefault()
  console.log('the form was submitted')

  const data = getFormFields(event.target)
  console.log('data is ', data)

  docApi.docCreate(data)
    .then(function (signUpResponse) {
      console.log('the sign of response is', signUpResponse)
    })

    .catch(function (signUpError) {
      console.log('sign up error is ', signUpError)
    })
}

const onGetAllDoctors = function (event) {
  event.preventDefault()
  console.log('show doctor was logged here')

  docApi.docShowAll()

    .then(DocUi.getAllDoctorsSuccess)
    .catch(DocUi.getAllDoctorsError)
}

const onDeleteDoctor = function (event) {
  event.preventDefault()
  console.log('this is event delete doctor')
  const data = getFormFields(event.target)
  console.log(data.doctor.id)
  docApi.docDelete(data.doctor.id)
}

// const onSignIn = function (event) {
//   event.preventDefault()
//   console.log('this is the sign in part')
//
//   const data = getFormFields(event.target)
//   console.log('data is ', data)
//
//   authApi.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.signInError)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//
//   authApi.signOut(event)
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log('Please accept new passowrd')
//   authApi.passwordChange(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFail)
// }
//
module.exports = {
  onCreateDoctor: onCreateDoctor,
  onGetAllDoctors: onGetAllDoctors,
  onDeleteDoctor: onDeleteDoctor
}