# 📣 @EmirTech-ch/notify-hub

> A tiny, TypeScript-powered **notification hub** using the **Observer**, **Singleton**, and **IIFE** design patterns.

Easily allow parts of your app to **subscribe to messages** and be notified whenever a broadcast is sent. Works seamlessly in **Node.js**, **browsers**, and any frontend framework like React, Vue, or Angular.

---

## ✨ Features

- 🧠 **Observer pattern**: Multiple components can listen to messages
- 🧍 **Singleton pattern**: One central notification manager
- 🧳 **Encapsulated with IIFE**: Lightweight, clean API
- 📦 Framework-agnostic & easy to use
- ⚡ Type-safe with full TypeScript support
- 🌐 Works in browser & Node environments

---

## 📦 Install

```bash
npm install @EmirTech-ch/notify-hub

Or using yarn:

yarn add @EmirTech-ch/notify-hub

```

---

## 🚀 Quick Start

```javascript

1. Get the Singleton instance

import NotifyHub from '@EmirTech-ch/notify-hub';

const notifier = NotifyHub.getInstance();

2. Subscribe to messages

const uiObserver = notifier.subscribe("UI", message => {
  console.log("UI received:", message);
});

3. Send a broadcast

notifier.send("Hello all subscribers!");

4. Unsubscribe

notifier.unsubscribe(uiObserver);

```

### 🧪 Example

```javascript
import NotifyHub from "@EmirTech-ch/notify-hub";

const hub = NotifyHub.getInstance();

// Observer 1: UI component
const ui = hub.subscribe("UI", (msg) => {
  console.log("[UI] Message:", msg);
});

// Observer 2: Logger
const log = hub.subscribe("Logger", (msg) => {
  console.log("[Logger] Logging:", msg);
});

hub.send("App initialized!");

// Later...
hub.unsubscribe(log);
hub.send("Only UI will see this");
```

---

### 📘 API

```javascript

NotifyHub.getInstance(): NotifyHubInstance

//  Returns the singleton notification hub.


notifyHub.subscribe(name: string, callback: (msg: string) => void): Observer

// Subscribes a new listener to receive messages.
	// •	name — an identifier (useful for debugging)
	// •	callback — function to call with each message

// Returns an Observer object you can use to unsubscribe.


notifyHub.send(message: string): void

// Broadcasts a message to all subscribers.


notifyHub.unsubscribe(observer: Observer): void

// Stops notifying a previously subscribed observer.

```

---

### 🏗️ Design Patterns Used

- **Singleton**: Ensures only one instance of NotifyHub exists.
- **Observer**: Allows multiple components to subscribe to notifications.
- **IIFE**: Encapsulates the logic and state, preventing global scope pollution.
- **Encapsulation**: Keeps the internal state private, exposing only necessary methods.
- **TypeScript**: Provides type safety and autocompletion.
- **Framework-agnostic**: Works with any JavaScript framework or library.
- **Lightweight**: Minimal footprint, no dependencies.
- **Easy to use**: Simple API for subscribing and sending messages.
- **Flexible**: Can be extended for more complex use cases.
- **Performance**: Efficient message dispatching and subscription management.
- **Debugging**: Each subscription can be identified by a name for easier debugging.

---

### 🛡️ TypeScript Support

```javascript
// Full types are included automatically — no need to install anything extra.

const hub = NotifyHub.getInstance();

hub.subscribe("Debugger", (msg: string) => {
console.log(msg);
});

hub.send("Hello, TypeScript!");
```

---

### 📁 File Structure (Bundled)

```plaintext
dist/
├── notify-hub.umd.js # For use in browser via <script>
├── notify-hub.esm.js # For ES module import
├── index.d.ts # Type definitions
```

### 🌍 Browser Usage (UMD)

```javascript
// You can include the UMD build directly in a <script> tag:

<script src="notify-hub.umd.js"></script>
<script>
  const hub = NotifyHub.getInstance();
  hub.subscribe("Popup", msg => alert("Msg: " + msg));
  hub.send("You're awesome!");
</script>

```

---

### 🪪 License

MIT © Emir Kovacevic
