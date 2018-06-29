'use strict'

const authEvents = require('./auth/events')
const docEvents = require('./doctors/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#signUpForm').on('submit', authEvents.onSignUp)
  $('#signInForm').on('submit', authEvents.onSignIn)
  $('#password_change').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#doctor_create').on('submit', docEvents.onCreateDoctor)
  $('#doc_show').on('click', docEvents.onGetAllDoctors)
  $('#doctor_delete').on('submit', docEvents.onDeleteDoctor)
  $('#doctor_update').on('submit', docEvents.onUpdateDoctor)
})
