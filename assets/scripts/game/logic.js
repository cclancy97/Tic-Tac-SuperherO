const store = require('../store')
const ui = require('../ui')
const api = require('../api')
const makeMove = (event) => {
  if (!store.over) {
    const space = $(event.target)
    const id = space.data('id')
    if (space.text() === 'X' || space.text() === 'O') {
      ui.updateFailure()
    } else {
      $('#mesage').text('')
      if (store.currentPlayer === 'X') {
        $('#message').text('O is up!')
        ui.updateSuccess(space, 'X')
        store.currentPlayer = 'O'
        store.previousPlayer = 'X'
      } else {
        ui.updateSuccess(space, 'O')
        $('#message').text('X is up!')
        store.currentPlayer = 'X'
        store.previousPlayer = 'O'
      }
      api.updateGame(id, store.previousPlayer)
        .then(ui.updateSuccess(event.target, store.previousPlayer))
        .catch(ui.updateFailure)
      store.cells[id] = store.previousPlayer
      checkWin()
    }
  }
}
let oCounter = 0
let xCounter = 0
const checkWin = () => {
  if (store.cells[0] === 'X' && store.cells[1] === 'X' &&
    store.cells[2] === 'X') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    xCounter++
  } else if (store.cells[3] === 'X' && store.cells[4] === 'X' &&
    store.cells[5] === 'X') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    xCounter++
  } else if (store.cells[6] === 'X' && store.cells[7] === 'X' &&
    store.cells[8] === 'X') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    xCounter++
  } else if (store.cells[0] === 'X' && store.cells[3] === 'X' &&
    store.cells[6] === 'X') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    xCounter++
  } else if (store.cells[1] === 'X' && store.cells[4] === 'X' &&
    store.cells[7] === 'X') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    xCounter++
  } else if (store.cells[2] === 'X' && store.cells[5] === 'X' &&
    store.cells[8] === 'X') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    xCounter++
  } else if (store.cells[0] === 'X' && store.cells[4] === 'X' &&
    store.cells[8] === 'X') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    xCounter++
  } else if (store.cells[6] === 'X' && store.cells[4] === 'X' &&
    store.cells[2] === 'X') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    xCounter++
  } else if (store.cells[0] === 'O' && store.cells[1] === 'O' &&
    store.cells[2] === 'O') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    oCounter++
  } else if (store.cells[3] === 'O' && store.cells[4] === 'O' &&
    store.cells[5] === 'O') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    oCounter++
  } else if (store.cells[6] === 'O' && store.cells[7] === 'O' &&
    store.cells[8] === 'O') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    oCounter++
  } else if (store.cells[0] === 'O' && store.cells[3] === 'O' &&
    store.cells[6] === 'O') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    oCounter++
  } else if (store.cells[1] === 'O' && store.cells[4] === 'O' &&
    store.cells[7] === 'O') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    oCounter++
  } else if (store.cells[2] === 'O' && store.cells[5] === 'O' &&
    store.cells[8] === 'O') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    oCounter++
  } else if (store.cells[0] === 'O' && store.cells[4] === 'O' &&
    store.cells[8] === 'O') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    oCounter++
  } else if (store.cells[6] === 'O' && store.cells[4] === 'O' &&
    store.cells[2] === 'O') {
    $('#message').text(store.previousPlayer + ' Wins!')
    store.over = true
    oCounter++
  } else if (
    (store.cells[0] !== ('')) && (store.cells[1] !== ('')) &&
    (store.cells[2] !== ('')) && (store.cells[3] !== ('')) &&
    (store.cells[4] !== ('')) && (store.cells[5] !== ('')) &&
    (store.cells[6] !== ('')) && (store.cells[7] !== ('')) &&
    (store.cells[8] !== (''))) {
    $('#message').text('Tie!')
    store.over = true
  }
  checkStats()
}
const checkStats = () => {
  if (store.over) {
    $('#game-over').html('Game Over!')
    $('#game-over').html(' ')
    $('#score').html('X : ' + xCounter + '<br>' + 'O : ' + oCounter)
  } else if (!checkWin) {
    $('#message').text('Draw!')
  }
}
const resetBoard = () => {
  $('.grid-item').text('')
  $('#game-over').html('')
}

module.exports = {
  makeMove,
  checkWin,
  checkStats,
  resetBoard
}
