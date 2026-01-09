import { slide as MenuBar } from 'react-burger-menu';
import { IBurgerMenu } from './types';

const BurgerMenu = ({children}: IBurgerMenu) => {
  return (
    <MenuBar right styles={styles}>{children}</MenuBar>
  )
}

var styles = {
  bmBurgerButton: {
    position: 'sticky',
    width: '36px',
    height: '30px',
    right: '8px',
    top: '8px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a477f',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#354799'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'block',
    padding: '0.4em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default BurgerMenu;