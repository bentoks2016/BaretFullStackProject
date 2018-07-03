'strict'

const store = require('../store')
const tableCreate = require('./tableCreate')

const ui = require('../auth/ui.js')

const getAllDoctorsSuccess = function (getAllDoctorsResponse) {
  console.log('getAllDoctorsResponse is ', getAllDoctorsResponse)
  console.log('this is for response ', getAllDoctorsResponse.doctors)
  store.list = getAllDoctorsResponse.doctors
  $('#doctors-table-body').html(tableCreate.tableCreate(getAllDoctorsResponse.doctors))
  // console.log('this is for table ', tableCreate.tableCreate)
  $('show_doctor_modal').modal('toggle')
}

const getAllDoctorsError = function (error) {
  console.log('Error in sign up is ', error)
}

const createDoctorSuccess = function (createDoctorResponse) {
  console.log('Doctor was created here ', createDoctorResponse)
  $('#successfulDocCreate').toggleClass('hide').fadeOut(7000)
  console.log('clearform was here', ui.clearForm)
  ui.clearForm()
}

const createDoctorFail = function (failCreateDoc) {
  console.log('sign up error is ', failCreateDoc)
  $('#failedDocCreate').toggleClass('hide').fade(7000)
  ui.clearForm()
}

const viewDoctorSuccess = function (viewDoctorReponse) {
  console.log('View single doc is', viewDoctorReponse)
  $('.viewDoc').html({viewDoctorReponse})
}

const deleteDoctorSuccess = function (deleteDoctorResponse) {
  $('#successfulDocDelete').toggleClass('hide').fadeOut(7000)
  ui.clearForm()
  console.log('delete doc was success ', deleteDoctorResponse)
}

const deleteDoctorFail = function (deleteDoctorFailResponse) {
  $('#failedDocDelete').toggleClass('hide').fadeOut(7000)
  ui.clearForm()
  console.log('delete failed here ', deleteDoctorFailResponse)
}

module.exports = {
  getAllDoctorsSuccess: getAllDoctorsSuccess,
  getAllDoctorsError: getAllDoctorsError,
  viewDoctorSuccess: viewDoctorSuccess,
  deleteDoctorSuccess: deleteDoctorSuccess,
  deleteDoctorFail: deleteDoctorFail,
  createDoctorSuccess: createDoctorSuccess,
  createDoctorFail: createDoctorFail

}
