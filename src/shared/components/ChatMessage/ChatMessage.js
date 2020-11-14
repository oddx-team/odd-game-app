import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import utils from 'utils'
import { StyledMessage, Avatar, Status, Name, Message, Time } from './styled'

export const ChatMessage = ({ username, message, time, small }) => {
  const { hours, mins } = utils.parseTime(time)
  const onlineStatus = classNames({ online: true })

  return (
    <StyledMessage className={classNames({ small })}>
      <Avatar src={`https://www.tinygraphs.com/spaceinvaders/${username}?size=60`} />
      <Status className={onlineStatus} />
      <Name>{username}</Name>
      <Message>{message}</Message>
      <Time>
        {hours}:{mins}
      </Time>
    </StyledMessage>
  )
}

ChatMessage.propTypes = {
  username: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.number,
  online: PropTypes.bool,
  small: PropTypes.bool
}
