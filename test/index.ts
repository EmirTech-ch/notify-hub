import NotifyHub from "../dist/notify-hub.ems.js";

const hub = NotifyHub.getInstance();

hub.subscribe("UI", (msg: string) => {
  console.log("[UI] Message:", msg);
});

hub.subscribe("Log", (msg: string) => {
  console.log("[Logger] Logging", msg);
});

hub.send("Welcome to NotifyHub");
