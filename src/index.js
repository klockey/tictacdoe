if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

// let textAnswer = document.querySelector('div.container2')
const buttons = document.querySelectorAll('tr button')
const whosTurn = document.querySelector('.whosTurn')

let xturn = true
let numberOfTurns = 0

let gridData = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

//    USE grid
//   ['00', '01', '02'],
//   ['10', '11', '12'],
//   ['20', '21', '22']

const handleButtonClick = (event) => {
  console.log('here')
  const move = event.target.className
  switch (move) {
    case 'zeroButton':
      event.target.innerText = gridData[0][0] = xturn === true ? 'x' : 'o'
      console.log('button zero')
      buttons[0].disabled = true
      break
    case 'firstButton':
      event.target.innerText = gridData[0][1] = xturn === true ? 'x' : 'o'
      buttons[1].disabled = true
      break
    case 'secondButton':
      event.target.innerText = gridData[0][2] = xturn === true ? 'x' : 'o'
      buttons[2].disabled = true
      break
    case 'thirdButton':
      event.target.innerText = gridData[1][0] = xturn === true ? 'x' : 'o'
      buttons[3].disabled = true
      break
    case 'fourthButton':
      event.target.innerText = gridData[1][1] = xturn === true ? 'x' : 'o'
      buttons[4].disabled = true
      break
    case 'fifthButton':
      event.target.innerText = gridData[1][2] = xturn === true ? 'x' : 'o'
      buttons[5].disabled = true
      break
    case 'sixthButton':
      event.target.innerText = gridData[2][0] = xturn === true ? 'x' : 'o'
      buttons[6].disabled = true
      break
    case 'seventhButton':
      event.target.innerText = gridData[2][1] = xturn === true ? 'x' : 'o'
      buttons[7].disabled = true
      break
    case 'eighthButton':
      event.target.innerText = gridData[2][2] = xturn === true ? 'x' : 'o'
      buttons[8].disabled = true
      break
    default: console.log('error')
  }

  xturn = (xturn === true ? !xturn : true)
  console.log(xturn)
  numberOfTurns++
  console.log('number of turns' + numberOfTurns)
  if (numberOfTurns % 2 === 0) {
    whosTurn.innerText = 'X Turn'
  } else {
    whosTurn.innerText = 'O Turn'
  }

  if (calculateWinner() === 'xwon') {
    alert('X won!')
    console.log('xwon')
    resetGame()
  } else if (calculateWinner() === 'owon') {
    alert('O won!')
    console.log('owon')
    resetGame()
  } else if (numberOfTurns === 9) {
    alert('Tie!')
    resetGame()
  } else {
    console.log('error')
  }
}

const calculateWinner = () => {
//    USE grid
//   ['00', '01', '02'],
//   ['10', '11', '12'],
//   ['20', '21', '22']

/******************************************************************************/
/**                Horizontal Rows Tests                                     **/
/******************************************************************************/

  if ((gridData[0][0] + gridData[0][1] + gridData[0][2]).match(/xxx/i)) return 'xwon'
  if ((gridData[0][0] + gridData[0][1] + gridData[0][2]).match(/ooo/i)) return 'owon'

  if ((gridData[1][0] + gridData[1][1] + gridData[1][2]).match(/xxx/i)) return 'xwon'
  if ((gridData[1][0] + gridData[1][1] + gridData[1][2]).match(/ooo/i)) return 'owon'

  if ((gridData[2][0] + gridData[2][1] + gridData[2][2]).match(/xxx/i)) return 'xwon'
  if ((gridData[2][0] + gridData[2][1] + gridData[2][2]).match(/ooo/i)) return 'owon'

/******************************************************************************/
/**                Vertical Columns Tests                                    **/
/******************************************************************************/

  if ((gridData[0][0] + gridData[1][0] + gridData[2][0]).match(/xxx/i)) return 'xwon'
  if ((gridData[0][0] + gridData[1][0] + gridData[2][0]).match(/ooo/i)) return 'owon'

  if ((gridData[0][1] + gridData[1][1] + gridData[2][1]).match(/xxx/i)) return 'xwon'
  if ((gridData[0][1] + gridData[1][1] + gridData[2][1]).match(/ooo/i)) return 'owon'

  if ((gridData[0][2] + gridData[1][2] + gridData[2][2]).match(/xxx/i)) return 'xwon'
  if ((gridData[0][2] + gridData[1][2] + gridData[2][2]).match(/ooo/i)) return 'owon'

/******************************************************************************/
/**                Diagonal Columns Tests                                    **/
/******************************************************************************/

  if ((gridData[0][0] + gridData[1][1] + gridData[2][2]).match(/xxx/i)) return 'xwon'
  if ((gridData[0][0] + gridData[1][1] + gridData[2][2]).match(/ooo/i)) return 'owon'

  if ((gridData[0][2] + gridData[1][1] + gridData[2][0]).match(/xxx/i)) return 'xwon'
  if ((gridData[0][2] + gridData[1][1] + gridData[2][0]).match(/ooo/i)) return 'owon'
  // console.log('xxx won on first row')
}

const resetGame = (event) => {
//  if (event.target.innerText === 'resetGame') {
  for (let i = 0; i < buttons.length; i++) {
  //  buttons[i].enabled = true
    buttons[i].innerText = ''
    console.log('in reset game')
  }
  if (document.readyState === 'complete') {
    console.log('complete')
  }
  location.reload()
}

const main = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].enabled = true
    buttons[i].addEventListener('click', handleButtonClick)
  }
  const resetButton = document.querySelector('.alignItems button')
  resetButton.addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
