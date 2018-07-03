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
    .then(DocUi.createDoctorSuccess)
    .catch(DocUi.createDoctorFail)
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

    .then(DocUi.deleteDoctorSuccess)
    .catch(DocUi.deleteDoctorFail)
}

const onUpdateDoctor = function (event) {
  event.preventDefault()
  console.log('doctor update starts here')
  const data = getFormFields(event.target)
  docApi.docUpdate(data)
}

const onViewDoctor = function (event) {
  event.preventDefault()
  console.log('view a doctor here')
  const data = getFormFields(event.target)
  docApi.docView(data.doctor.id)
    .then(DocUi.viewDoctorSuccess)
    .catch(DocUi.viewDoctorError)
}

module.exports = {
  onCreateDoctor: onCreateDoctor,
  onGetAllDoctors: onGetAllDoctors,
  onDeleteDoctor: onDeleteDoctor,
  onUpdateDoctor: onUpdateDoctor,
  onViewDoctor: onViewDoctor
}
