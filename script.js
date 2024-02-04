document.addEventListener('DOMContentLoaded', function () {
    // Initial background image
    let currentBackground = 'url("images/initial-background.jpg")';

    // Button click event
    document.getElementById('changeButton').addEventListener('click', function () {
        // Change background image
        document.body.style.backgroundImage = 'url("images/new-background.jpg")';

        // Set a timeout to revert the background image after one minute (60,000 milliseconds)
        setTimeout(function () {
            document.body.style.backgroundImage = currentBackground;
        }, 60000);

        // Change button text
        document.getElementById('changeButton').textContent = 'I miss you too!';

        // Set a timeout to reset the button text after another minute (120,000 milliseconds)
        setTimeout(function () {
            document.getElementById('changeButton').textContent = 'I miss you!';
        }, 120000); // 2 minutes (adjust as needed)
    });
});
