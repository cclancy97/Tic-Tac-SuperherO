'use strict'

const store = require('./store')
const hideMessaging = function () {
  setTimeout(function () {
    $('#message').html('')
  }, 5000)
}

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  // Clear getFormFields
  $('form').trigger('reset')
}
const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  // Clear getFormFields
  $('form').trigger('reset')
}
const signUpSuccess = responseData => {
  successMessage('You signed up successfully!')
}
const signUpFailure = responseData => {
  failureMessage('Sign up failed!')
}
const signInSuccess = responseData => {
  successMessage('You signed in successfully!')
  $('#change-password').show()
  $('#buttons').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  // stores user information in user object for later use
  store.user = responseData.user
}
const signInFailure = () => {
  failureMessage('Sign in failed!')
}
const signOutSuccess = responseData => {
  successMessage('You signed out successfully!')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.grid-container').hide()
  $('#buttons').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('.stats').hide()
  hideMessaging()
}
const signOutFailure = responseData => {
  failureMessage('Sign out failed!')
}
const changePasswordSuccess = responseData => {
  successMessage('You changed your password!')
}
const changePasswordFailure = responseData => {
  failureMessage('Password not changed!')
}
const createGameSuccess = data => {
  $('.grid-container').show()
  successMessage('New Game! X is up!')
  store.over = false
  store.currentPlayer = 'X'
  store.gameObj = data.game
  store.cells = store.gameObj.cells
  store.gameID = store.gameObj.id
}
const createGameFailure = data => {
  failureMessage('Error! New game not made!')
}
const updateSuccess = (space, value) => {
  $(space).text(value)
}
const updateFailure = data => {
  failureMessage('Invalid Move!', data)
}

const getGameSuccess = data => {
  const game = data.games
  $('#message').text(`You have played ${game.length} games`)
}
const getGameFailure = message => {
  failureMessage('Games not retrieved')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  updateSuccess,
  updateFailure,
  hideMessaging,
  getGameSuccess,
  getGameFailure
}
