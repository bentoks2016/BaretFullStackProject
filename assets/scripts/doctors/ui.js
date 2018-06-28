'strict'

const store = require('../store')

const getAllDoctorsSuccess = function (getAllDoctorsResponse) {
  console.log('getAllDoctorsResponse is ', getAllDoctorsResponse)
}

const getAllDoctorsError = function (error) {
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
  getAllDoctorsSuccess: getAllDoctorsSuccess,
  getAllDoctorsError: getAllDoctorsError,
  signInSuccess: signInSuccess,
  signInError: signInError
}
