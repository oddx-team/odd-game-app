import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GameContext } from 'contexts/GameContext'
import classNames from 'classnames'
import styles from './styles.module.scss'

import Api from 'services'

export const HeaderMenu = () => {
  const history = useHistory()
  const { dispatch } = useContext(GameContext)
  const [openMenu, setOpenMenu] = useState(false)
  const menuClass = openMenu
    ? classNames(styles.menu, styles.open)
    : classNames(styles.menu)

  const logoutGame = async () => {
    try {
      await Api.logout()
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
    setOpenMenu(false)
  }

  return (
    <div
      className={menuClass}
      onMouseEnter={() => setOpenMenu(true)}
      onMouseLeave={() => setOpenMenu(false)}
    >
      <button className={styles.menuBtn} />
      <div className={styles.dropdown}>
        <div className={styles.profile} onClick={() => openProfile()}>My Profile</div>
        <div className={styles.logout} onClick={() => logoutGame()}>Logout</div>
      </div>
    </div>
  )
}

export default HeaderMenu
