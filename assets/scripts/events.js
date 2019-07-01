'use strict'

const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const store = require('./store')
const logic = require('./game/logic')

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
  ui.hideMessaging()
}
const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  ui.hideMessaging()
}
const onSignOut = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  ui.hideMessaging()
}
const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  ui.hideMessaging()
}
const onCreateGame = event => {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess, store.over = false)
    .catch(ui.createGameFailure)
  logic.resetBoard()
  ui.hideMessaging()
}
const onUpdateGame = event => {
  event.preventDefault()
  logic.makeMove(event)
  ui.hideMessaging()
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateGame,
  onGetGames,
  onUpdateGame
}
