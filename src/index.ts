type ObserverCallback = (message: string) => void;

// Observer class that represents an individual observer
class Observer {
  name: string;
  update: ObserverCallback;

  constructor(name: string, onUpdate: ObserverCallback) {
    this.name = name;
    this.update = onUpdate;
  }
}

// Subject class that maintains a list of observers and notifies them of changes
class Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(data: string): void {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

// NotifyHub is a singleton class that allows multiple observers to subscribe to notifications
const NotifyHub = (function () {
  let instance: ReturnType<typeof createInstance> | null = null;

  // Private constructor
  function createInstance() {
    const subject = new Subject();

    return {
      send: (message: string) => {
        subject.notify(message);
      },
      subscribe: (name: string, callback: ObserverCallback): Observer => {
        const observer = new Observer(name, callback);
        subject.subscribe(observer);
        return observer;
      },
      unsubscribe: (observer: Observer) => {
        subject.unsubscribe(observer);
      },
    };
  }

  // Public method to get the singleton instance
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export default NotifyHub;
