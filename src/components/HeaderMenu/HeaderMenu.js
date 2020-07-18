import React from 'react'
import { useHistory } from 'react-router-dom'
import { useGameActionsContext } from 'contexts/GameContext'
import { useModalContext, useModalActionsContext } from 'contexts/ModalContext'
import classNames from 'classnames'
import styles from './styles.module.scss'
import Api from 'services'

export const HeaderMenu = () => {
  const history = useHistory()
  const { openMenu } = useModalContext()
  const { logoutGame } = useGameActionsContext()
  const { setError, setMenu } = useModalActionsContext()

  const menuClass = openMenu
    ? classNames(styles.menu, styles.open)
    : classNames(styles.menu)

  const openProfile = () => {
    setMenu(false)
  }

  const viewCards = () => {
    history.push('/view-cards')
  }

  const viewRooms = () => {
    history.push('/rooms')
  }

  const logout = async () => {
    try {
      await Api.logout()
      history.push('/')
      logoutGame()
    } catch (err) {
      setError('Something went terribly wrong!')
    }
  }

  return (
    <div
      className={menuClass}
      onMouseEnter={() => setMenu(true)}
      onMouseLeave={() => setMenu(false)}
    >
      <button className={styles.menuBtn} />
      <div className={styles.dropdown}>
        <div className={styles.profile} onClick={() => openProfile()}>Profile</div>
        <div className={styles.profile} onClick={() => viewCards()}>View all cards</div>
        <div className={styles.profile} onClick={() => viewRooms()}>View rooms</div>
        <div className={styles.logout} onClick={() => logout()}>Logout</div>
      </div>
    </div>
  )
}

export default HeaderMenu
