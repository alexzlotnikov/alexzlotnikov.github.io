function sendNotification() {
    // You can use different methods to send notifications, but for simplicity, we'll use an alert.
    alert('Alex misses you too!');

    // Make an API call to your serverless function.
    fetch('/.netlify/functions/notify')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    
document.addEventListener('DOMContentLoaded', function () {
    // Initial background image
    let currentBackground = 'url("initial-background.jpg")';

    // Button click event
    document.getElementById('changeButton').addEventListener('click', function () {
        // Change background image
        document.body.style.backgroundImage = 'url("new-background.jpg")';

        // Set a timeout to revert the background image after one minute (60,000 milliseconds)
        setTimeout(function () {
            document.body.style.backgroundImage = currentBackground;
        }, 60000);
    });
});

.container {
    text-align: center;
}

button {
    padding: 10px 20px;
    font-size: 16px;
}
