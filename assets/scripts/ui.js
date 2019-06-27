'use strict'

const store = require('./store')

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
const indexGamesSuccess = function (data) {
  console.log('indexGamesSuccess!', data)
  $('#games-display').html('')
}

const signUpSuccess = responseData => {
  successMessage('You signed up successfully!')
}
const signUpFailure = responseData => {
  failureMessage('Sign up failed!')
}
const signInSuccess = responseData => {
  successMessage('You signed in successfully!')
  // stores user information in user object for later use
  store.user = responseData.user
}
const signInFailure = () => {
  failureMessage('Sign in failed!')
}
const signOutSuccess = responseData => {
  successMessage('You signed out successfully!')
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
  successMessage('New Game!')
  $('#games-display').html('')

  console.log(data.game.cells)
  store.gameElements = data.game.cells
  store.player_x = data.game.player_x

}
const createGameFailure = data => {
  successMessage('Error! New game not made!')
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
  indexGamesSuccess
}
