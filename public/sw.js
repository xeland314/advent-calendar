self.addEventListener("push", function (event) {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: data.icon || "/tapa.svg", // Asegúrate de tener este ícono en tu carpeta pública
      badge: data.badge || "/tapa.svg", // Icono pequeño para notificaciones
      vibrate: [100, 50, 100], // Patrón de vibración
      data: {
        url: data.url || "/advent-calendar/", // URL para redirigir cuando se haga clic
        dateOfArrival: Date.now(),
        primaryKey: "2",
      },
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

self.addEventListener("notificationclick", function (event) {
  console.log("Notification click received.");
  event.notification.close(); // Cierra la notificación

  const notificationData = event.notification.data;
  const destination = notificationData.url || "/"; // URL predeterminada si no se proporciona
  event.waitUntil(clients.openWindow(destination)); // Abre la URL en una nueva ventana
});
