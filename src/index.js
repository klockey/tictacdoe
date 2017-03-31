if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

let xturn = true

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
  const move = event.target.className
  switch (move) {
    case 'zeroButton':
      event.target.innerText = gridData[0][0] = xturn === true ? 'x' : 'o'
      break
    case 'firstButton':
      event.target.innerText = gridData[0][1] = xturn === true ? 'x' : 'o'
      break
    case 'secondButton':
      event.target.innerText = gridData[0][2] = xturn === true ? 'x' : 'o'
      break
    case 'thirdButton':
      event.target.innerText = gridData[1][0] = xturn === true ? 'x' : 'o'
      break
    case 'fourthButton':
      event.target.innerText = gridData[1][1] = xturn === true ? 'x' : 'o'
      break
    case 'fifthButton':
      event.target.innerText = gridData[1][2] = xturn === true ? 'x' : 'o'
      break
    case 'sixthButton':
      event.target.innerText = gridData[2][0] = xturn === true ? 'x' : 'o'
      break
    case 'seventhButton':
      event.target.innerText = gridData[2][1] = xturn === true ? 'x' : 'o'
      break
    case 'eighthButton':
      event.target.innerText = gridData[2][2] = xturn === true ? 'x' : 'o'
      break
    default: console.log('error')
  }
  xturn = (xturn === true ? !xturn : true)
  if (calculateWinner() === 'xwon') {
    console.log('xwon')
  } else if (calculateWinner() === 'owon') {
    console.log('owon')
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

const main = () => {
  const buttons = document.querySelectorAll('button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
