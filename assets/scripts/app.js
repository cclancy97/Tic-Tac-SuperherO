'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events')
$(() => {
  // $( handler )
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('submit', events.onSignOut)
  $('#change-password').on('submit', events.onChangePassword)
  $('#create-game').on('click', events.onCreateGame)
  $('#index-games').on('click', events.onGetGames)
  $('*[data-id="0"]').on('click', events.onUpdateGame)
  $('*[data-id="1"]').on('click', events.onUpdateGame)
  $('*[data-id="2"]').on('click', events.onUpdateGame)
  $('*[data-id="3"]').on('click', events.onUpdateGame)
  $('*[data-id="4"]').on('click', events.onUpdateGame)
  $('*[data-id="5"]').on('click', events.onUpdateGame)
  $('*[data-id="6"]').on('click', events.onUpdateGame)
  $('*[data-id="7"]').on('click', events.onUpdateGame)
  $('*[data-id="8"]').on('click', events.onUpdateGame)
})
