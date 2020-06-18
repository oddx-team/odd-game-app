import React from 'react'
import { useHistory } from 'react-router-dom'
import { useModal, useGame } from 'hooks'
import classNames from 'classnames'
import styles from './styles.module.scss'

import Api from 'services'

export const HeaderMenu = () => {
  const HookModal = useModal()
  const HookGame = useGame()
  const History = useHistory()

  const menuClass = HookModal.openMenu
    ? classNames(styles.menu, styles.open)
    : classNames(styles.menu)

  const logoutGame = async () => {
    try {
      await Api.logout()
      History.push('/')
      HookGame.logoutGame()
    } catch (err) {
      HookModal.setError('Something went terribly wrong!')
    }
  }

  const openProfile = () => {
    HookModal.setMenu(false)
  }

  return (
    <div
      className={menuClass}
      onMouseEnter={() => HookModal.setMenu(true)}
      onMouseLeave={() => HookModal.setMenu(false)}
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
