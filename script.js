function sendNotification() {
    // You can use different methods to send notifications, but for simplicity, we'll use an alert.
    alert('Alex misses you too!');

    // Make an API call to your serverless function.
    fetch('/.netlify/functions/notify')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}
