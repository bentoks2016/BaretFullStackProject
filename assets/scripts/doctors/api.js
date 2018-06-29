const config = require('../config.js')
const store = require('../store.js')

const docCreate = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/doctors',
    data: data
  }
  )
}

const docShowAll = function () {
  console.log('data is what it is')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/doctors'
  })
}

const docDelete = function (id) {
  console.log('this is api delete')
  console.log('id is ', id)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/doctors/${id}`
  })
}
// '{
// "doctor": {
//  "first_name": "'"${FIRSTNAME}"'",
//  "last_name": "'"${LASTNAME}"'",
//  "specialization": "'"${SPECIALIZATION}"'"
// }
// }'
//
// const signIn = function (data) {
//   return $.ajax({
//     method: 'POST',
//     url: config.apiUrl + '/sign-in',
//     data: data
//   })
// }

// const signOut = function (event) {
//   console.log('this is to check for sign out & store', store)
//   return $.ajax({
//     method: 'DELETE',
//     url: config.apiUrl + '/sign-out',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const passwordChange = function (data) {
//   console.log('store is ', store)
//   console.log('token is ', store.user.token)
//
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + 'change-password',
//     data: data,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  docCreate: docCreate,
  docShowAll: docShowAll,
  docDelete: docDelete
}