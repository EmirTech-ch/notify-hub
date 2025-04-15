Sure! Here’s the complete README.md content saved as a downloadable Markdown file.

⸻

📄 README.md for notify-hub

You can copy and paste this into your project’s root directory as README.md, or click here to download as a raw Markdown file.

⸻

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

Returns the singleton notification hub.


notifyHub.subscribe(name: string, callback: (msg: string) => void): Observer

Subscribes a new listener to receive messages.
	•	name — an identifier (useful for debugging)
	•	callback — function to call with each message

Returns an Observer object you can use to unsubscribe.


notifyHub.send(message: string): void

Broadcasts a message to all subscribers.


notifyHub.unsubscribe(observer: Observer): void

Stops notifying a previously subscribed observer.

```

---

🏗️ Design Patterns Used

Pattern Role in NotifyHub
Singleton One shared instance across the app
Observer Allows parts of app to subscribe/unsubscribe
IIFE Encapsulates internal logic & state

⸻

🛡️ TypeScript Support

Full types are included automatically — no need to install anything extra.

const hub = NotifyHub.getInstance();
hub.subscribe("Debugger", (msg: string) => {
console.log(msg);
});

⸻

📁 File Structure (Bundled)

dist/
├── notify-hub.umd.js # For use in browser via <script>
├── notify-hub.esm.js # For ES module import
├── index.d.ts # Type definitions

⸻

🌍 Browser Usage (UMD)

You can include the UMD build directly in a <script> tag:

<script src="notify-hub.umd.js"></script>
<script>
  const hub = NotifyHub.getInstance();
  hub.subscribe("Popup", msg => alert("Msg: " + msg));
  hub.send("You're awesome!");
</script>

⸻

🤝 Contributing

Contributions welcome! If you’d like to:
• Improve performance
• Add queueing / message history
• Add TypeScript generics
• Write framework-specific bindings

…feel free to open an issue or PR.

⸻

🪪 License

MIT © Emir Kovacevic

⸻

💬 Questions or Ideas?

Open an issue or reach out — always happy to collaborate on fun dev tools!

---
