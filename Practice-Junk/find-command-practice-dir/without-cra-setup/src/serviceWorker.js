export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
	  navigator.serviceWorker.register('/serviceWorker.js').then(function(registration) {
		//Registration was successful
		console.log('ServiceWorker registration successful with scope: ', registration.scope);
	  }, function(err) {
		//Registration failed
		console.log('ServiceWorker registration failed: ', err);
	  });
	});
  }
}
