if (navigator.serviceWorker) {
  console.log("Si existe service worker");
  navigator.serviceWorker.register("./sw.js");
}
