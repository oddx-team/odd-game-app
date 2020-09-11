export const eventBus = {
  events: {},
  publish (event, data) {
    if (!this.events[event]) return
    this.events[event].forEach(callback => callback(data))
  },
  subscribe (event, callback) {
    if (!this.events[event]) this.events[event] = []
    this.events[event].push(callback)
  },
  unsubscribe: event => {
    delete this.events[event]
  }
}
