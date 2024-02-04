const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    // Replace <YOUR_BOT_TOKEN> and <YOUR_CHAT_ID> with your actual bot token and chat ID.
    const botToken = '6941303743:AAFiYXFB9jO6jKrfL3cWV_4k_7faHNHGcEY';
    const chatId = '6941303743';

    // You can customize the notification message here.
    const message = 'Leezah needs you now!';

    // Build the Telegram API URL.
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    try {
        // Make an API call to the Telegram Bot API.
        const response = await fetch(apiUrl, { method: 'GET' });

        if (!response.ok) {
            throw new Error(`Failed to send notification: ${response.statusText}`);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Notification sent successfully' }),
        };
    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send notification' }),
        };
    }
};
