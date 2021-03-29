// Keeps global state and as it subclasses EventTarget acts as an event
// bus for services that know how to respond to events
class Store extends EventTarget {
  constructor() {
    super();
    this.state = {};
    this.queue = [];
  }

  dispatch(e) {
    let event = e;

    // We use a special event type STORE_EVENT so that components can emit a diversity of events
    // that are all targetted at the store. Once the event passes into the store, it's internally dispatched
    // to listeners based on event.detail.type.
    if (e.type === STORE_EVENT) {
      event = new CustomEvent(e.detail.type, {
        detail: e.detail,
      });
    }

    // Queue the event
    this.queue.push(event);

    // If this is the only event, work on it
    // This ensures that all listeners' handlers are executed to
    // completion before executing the next event.
    if (this.queue.length === 1) this.dispatchNext();
  }

  dispatchNext() {
    if (this.queue.length === 0) return;

    const event = this.queue[0];
    this.dispatchEvent(event); // EventTarget dispatch method

    this.queue.shift();
    this.dispatchNext();
  }

  initialState(s) {
    this.state = s;
  }

  // Bind event names to handlers
  bindServices(services) {
    Object.keys(services).forEach((type) => {
      store.addEventListener(type, (e) => {
        const handler = services[type];
        handler(e, store);
      });
    });
  }
}

const store = new Store();
export { store };

// Wrap components to connect them to the store
export const connect = (mapStateToProps, baseElement) =>
  class extends baseElement {
    constructor() {
      super();
      this.handleStoreStateChanged = this.handleStoreStateChanged.bind(this);
    }

    handleStoreStateChanged() {
      mapStateToProps(store.state, this);
    }

    connectedCallback() {
      store.addEventListener(STORE_STATE_CHANGED, this.handleStoreStateChanged);
      this.handleStoreStateChanged();

      // Do this last so wrapped class has properties already set
      // when its constructor is run
      if (super.connectedCallback) super.connectedCallback();
    }

    disconnectedCallback() {
      store.removeEventListener(STORE_STATE_CHANGED, this.handleStoreStateChanged);
      if (super.disconnectedCallback) super.disconnectedCallback();
    }
  };
