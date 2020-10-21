import { OddWS, Callback, Unsubscribe } from './index'
import usePubSub from '@oddx/pubsub'

export class OddWSProd implements OddWS {
  ws: WebSocket
  eventBus = usePubSub()

  constructor(uri: string) {
    this.ws = new WebSocket(uri)
  }

  async initial(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.ws.onopen = () => {
        this.ws.onmessage = (event) => {
          const data = event.data.split(":")
          if (data.length === 3) {
            this.eventBus.publish(data[0], data[1], data[2])
          }
        }
        resolve()
      }
      this.ws.onerror = err => {
        reject(err)
      }
    });
  }

  sendChat(msg: string) {
    this.ws.send(`message:${msg}`)
  }

  listenPublicChat(callback: Callback): Unsubscribe {
    return this.eventBus.subscribe('chat/public', (sender: string, msg: string) => {
      callback(sender, msg)
    })
  }
}

