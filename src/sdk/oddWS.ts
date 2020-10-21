import usePubSub from '@oddx/pubsub'

export interface OddWSInterface {
  sendChat(msg: string): void
  listenPublicChat(callback: WsCallback): void
}

export class OddWS implements OddWSInterface {
  ws: WebSocket
  eventBus = usePubSub()

  constructor() {
    this.ws = new WebSocket('ws://localhost:1235')
  }

  static async initial(): Promise<OddWS> {
    return new Promise((resolve, reject) => {
      const instance = new OddWS()
      instance.ws.onopen = () => {
        resolve(instance)

        instance.ws.onmessage = (event) => {
          const data = event.data.split(":");
          if (data.length === 3) {
            instance.eventBus.publish(data[0], data[1], data[2]);
          }
        }
      }
      instance.ws.onerror = err => {
        reject(err)
      }
    });
  }

  sendChat(msg: string) {
    this.ws.send(`message:${msg}`)
  }

  listenPublicChat(callback: WsCallback) {
    this.eventBus.subscribe('globalChat', (sender: string, msg: string) => {
      callback(sender, msg);
    })
  }
}

export type WsCallback = (sender: string, message: string) => void