exports.handler = async function (event, context) {
    // You can use this function to send notifications to your phone.
    // Implement the logic here.
    // Example: Send an email, use a third-party API, etc.

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Notification sent successfully' }),
    };
};
