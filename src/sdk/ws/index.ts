import { OddWSProd } from './OddWSProd'
import { OddWSMock } from './OddWSMock'
import { PubSubUnsubscribe } from '@oddx/pubsub'

export interface OddWS {
  initial(): Promise<void>
  sendChat(msg: string): void
  listenPublicChat(callback: Callback): Unsubscribe
}

export type Callback = (sender: string, message: string) => void
export type Unsubscribe = PubSubUnsubscribe

export async function initOddWS({ isProd = false, uri = 'ws://localhost:1235' }): Promise<OddWS> {
  const oddWS = isProd ? new OddWSProd(uri) : new OddWSMock()
  await oddWS.initial()
  return oddWS
}
