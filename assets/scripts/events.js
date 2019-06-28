'use strict'

const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const store = require('./store')

const onGetGames = function(event) {
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
}
const onClickBoard = event => {

  const cellValue = $(event.target).text('X')

  // const index = $(event.target).data('id')
  console.log(game)

  // const click = $(this).attr('data-id')

  // const term = $(index).attr('data-id')
  // console.log(term)
  // game[index] = 'X'
  // $('td').append(`${game}`)
  // $('td').append(`${game[index]}`)
  console.log(game)
}
const onUpdateGame = event => {
  event.preventDefault()
  const target = event.target

  const move = {
    game: {
      cell: {
        index: $(target).data('id'),
        value: $(target).text()
      },
      over: false
    }
  }
  console.log(move)
  api.updateGame(move)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

/*
// checks for empty boxes
let player = 'X'
const onPlay = event => {
  // event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)
  }
}
*/
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateGame,
  onGetGames,
  onClickBoard,
  onUpdateGame
}
/*if ($(event.target).text() === '') {
  // api.onUpdateGame(formData)
  $(event.target).html(player)
  const index = $(event.target).data('id')

  api.updateGame(index, player)
  .then(ui.onUpdateSuccess)
  .catch(ui.onUpdateFailure)
  if (player === 'X') {
    player = 'O'
  } else {
    player = 'X'
  }
}
}*/
