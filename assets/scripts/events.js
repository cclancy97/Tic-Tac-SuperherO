'use strict'

const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const store = require('./store')

const onGetGames = function (event) {
  api.indexGames()
    .then(ui.indexGamesSuccess) // do something on success
    .catch(console.log) // catch failures
}

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onSignOut = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onCreateGame = event => {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  onClickBoard()
}
const onClickBoard = event => {
  const game = store.gameElements
  const click = $(this).attr('data-id')

  // game.forEach(function (part, index, game) {
  // const term = $(index).attr('data-id')
  // console.log(term)
  // game[index] = 'X'
  // $('td').append(`${game}`)
  // $('td').append(`${game[index]}`)
  console.log(game)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateGame,
  onGetGames,
  onClickBoard
}
