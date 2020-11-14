import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextInput } from 'shared/components/TextInput'
import { ChatMessage } from 'shared/components/ChatMessage'
import { GlobalChatWrapper, StyledTab, StyledContainer, ChatContent } from './styled'
import { fetchGlobalChat } from 'features/gameSlice'
import PropTypes from 'prop-types'

export const GlobalChat = () => {
  const lastRef = useRef(null)
  const dispatch = useDispatch()
  const globalChat = useSelector(state => state.game.globalChat)

  useEffect(() => dispatch(fetchGlobalChat()), [dispatch])
  useEffect(() => scrollToBottom(), [globalChat])

  const scrollToBottom = () => {
    lastRef.current.scrollIntoView()
  }

  const submitMessage = text => {
    window.socket.emit('chat-global', text)
  }

  return (
    <GlobalChatWrapper>
      <ChatTab title='ChatBox' />

      <StyledContainer>
        <ChatContent>
          {globalChat && globalChat.map((message, i) => (
            <div key={i}>
              <ChatMessage {...message} />
            </div>
          ))}
          <div ref={lastRef} />
        </ChatContent>

        <TextInput placeholder='Type a message' onSubmit={submitMessage} />
      </StyledContainer>
    </GlobalChatWrapper>
  )
}

const ChatTab = ({ title }) => {
  return (
    <StyledTab>
      <i />
      <span>{title}</span>
    </StyledTab>
  )
}

ChatTab.propTypes = {
  title: PropTypes.string.isRequired
}
