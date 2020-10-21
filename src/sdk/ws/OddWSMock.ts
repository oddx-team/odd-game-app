import { OddWS, Callback, Unsubscribe } from './index'
import usePubSub from '@oddx/pubsub'

export class OddWSMock implements OddWS {
  eventBus = usePubSub()

  async initial(): Promise<void> {
    return
  }

  sendChat(msg: string): void {
    this.eventBus.publish('chat', 'guess', msg)
  }

  listenPublicChat(callback: Callback): Unsubscribe {
    return this.eventBus.subscribe('chat', (sender: string, msg: string) =>
      callback(sender, msg))
  }
}
