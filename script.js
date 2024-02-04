function sendNotification() {
    // You can use different methods to send notifications, but for simplicity, we'll use an alert.
    alert('Alex misses you too!');

    // Make an API call to your serverless function.
    fetch('/.netlify/functions/notify')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    transition: background-image 1s ease; /* Transition for smooth background image change */
}

.container {
    text-align: center;
}

button {
    padding: 10px 20px;
    font-size: 16px;
}
