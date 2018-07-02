'strict'

const store = require('../store')
const tableCreate = require('./tableCreate')

const getAllDoctorsSuccess = function (getAllDoctorsResponse) {
  console.log('getAllDoctorsResponse is ', getAllDoctorsResponse)
  console.log('this is for response ', getAllDoctorsResponse.doctors)
  store.list = getAllDoctorsResponse.doctors
  $('#doctors-table-body').html(tableCreate.tableCreate(getAllDoctorsResponse.doctors))
  // console.log('this is for table ', tableCreate.tableCreate)
  $('show_doctor_modal').modal('toggle')
}
// SHOW ALL success
// const showAllSuccess = function (showAllResponse) {
//   store.list = showAllResponse.games
//   $('#game-table-body').html(createTable(showAllResponse.games))
//   $('#modalGameList').modal('toggle')
// }

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

const viewDoctorSuccess = function (viewDoctorReponse) {
  console.log('View single doc is', viewDoctorReponse)
  $('.viewDoc').text(viewDoctorReponse)
}

module.exports = {
  getAllDoctorsSuccess: getAllDoctorsSuccess,
  getAllDoctorsError: getAllDoctorsError,
  viewDoctorSuccess: viewDoctorSuccess,
  signInSuccess: signInSuccess,
  signInError: signInError
}
