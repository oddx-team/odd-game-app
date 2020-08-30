import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useGameActionsContext } from 'contexts/GameContext'
import { useModalActionsContext } from 'contexts/ModalContext'
import { SocketContext } from 'contexts/SocketContext'
import styles from './styles.module.scss'
import Api from 'services'

export const HeaderMenu = () => {
  const history = useHistory()
  const { closeSocket } = useContext(SocketContext)
  const { logoutGame } = useGameActionsContext()
  const { setError } = useModalActionsContext()

  const redirectTo = (route) => {
    history.push(route)
  }

  const logout = async () => {
    try {
      await Api.logout()
      history.push('/')
      logoutGame()
      closeSocket()
    } catch (err) {
      setError('Something went terribly wrong!')
    }
  }

  return (
    <div className={styles.menu}>
      <button className={styles.menuBtn} />
      <div className={styles.dropdownContent}>
        <div className={styles.profile}>Profile</div>
        <div className={styles.profile} onClick={() => redirectTo('/view-cards')}>
          <span>View all cards</span>
        </div>
        <div className={styles.profile} onClick={() => redirectTo('/rooms')}>
          <span>View rooms</span>
        </div>
        <div className={styles.logout} onClick={() => logout()}>Logout</div>
      </div>
    </div>
  )
}

export default HeaderMenu
