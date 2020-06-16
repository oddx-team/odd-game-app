import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ModalContext } from 'contexts/ModalContext'
import { GameContext } from 'contexts/GameContext'
import classNames from 'classnames'
import styles from './styles.module.scss'

import Api from 'services'

const HeaderMenu = () => {
  const history = useHistory()
  const { modalState, modalDispatch } = useContext(ModalContext)
  const { dispatch } = useContext(GameContext)
  const { openMenu } = modalState
  const menuClass = openMenu
    ? classNames(styles.menu, styles.open)
    : classNames(styles.menu)

  const logoutGame = async () => {
    try {
      await Api.logout()
      modalDispatch({
        type: 'UPDATE_OPEN_MENU',
        openMenu: false
      })
      dispatch({
        type: 'UPDATE_LOGIN',
        isLoggedIn: false,
        username: null
      })
      history.push('/')
    } catch (err) {
    }
  }

  const openProfile = () => {
    modalDispatch({
      type: 'UPDATE_OPEN_MENU',
      openMenu: false
    })
  }

  return (
    <div className={menuClass}>
      <div className={styles.profile} onClick={() => openProfile()}>My Profile</div>
      <div className={styles.logout} onClick={() => logoutGame()}>Logout</div>
    </div>
  )
}

export default HeaderMenu
