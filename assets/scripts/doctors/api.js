const config = require('../config.js')
const store = require('../store.js')

const docCreate = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/doctors',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  }
  )
}

const docShowAll = function () {
  console.log('data is what it is')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/doctors',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const docDelete = function (id) {
  console.log('this is api delete')
  console.log('id is ', id)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/doctors/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const docView = function (id) {
  console.log('this is api View')
  console.log('id is ', id)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/doctors/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const docUpdate = function (data) {
  console.log('data for update is ', data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/doctors/${data.doctor.id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  docCreate: docCreate,
  docShowAll: docShowAll,
  docDelete: docDelete,
  docUpdate: docUpdate,
  docView: docView
}
