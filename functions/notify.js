const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    // Extract necessary information from the incoming Telegram update
    const { inline_query, message } = JSON.parse(event.body);

    if (inline_query) {
        // Handle inline query
        const inlineQueryId = inline_query.id;
        const responseText = 'Your response to the inline query';

        const apiUrl = `https://api.telegram.org/bot6941303743:AAFiYXFB9jO6jKrfL3cWV_4k_7faHNHGcEY/answerInlineQuery?inline_query_id=${inlineQueryId}&results=[{"type":"article","id":"1","title":"Your Article","input_message_content":{"message_text":"${responseText}"}}]`;

        try {
            // Make an API call to answer the inline query
            const response = await fetch(apiUrl, { method: 'GET' });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    } else if (message) {
        // Handle regular messages
        // Add your logic for handling regular messages here
    }

    // Return a response (if needed)
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Update processed successfully' }),
    };
};
