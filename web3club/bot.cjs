

const TelegramBot = require('node-telegram-bot-api');
const token = '6726481993:AAHxpllsjm6OoDxtiSCQhVfeB7SoPDLUIwQ'; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    if (messageText === '/start') {
        bot.sendMessage(chatId, '🚀 Welcome to Wallstreet DAO! How can I assist you? Type /help for commands.');
    }
    else if (messageText === '/help') {
        bot.sendMessage(chatId, 'Here are the available commands:\n\n' +
            '/blogs - Explore web3 building and usage 📚\n' +
            '/events - Discover upcoming and past events 📅\n' +
            '/projects - View student projects and submit yours 💼\n' +
            '/news - Stay updated with the latest news 📰\n' +
            '/digiboard - Preview upcoming events 📌\n' +
            '/review - Share your ideas and feedback 💬\n' +
            '/stress - Take a break with stress relief games 🎮 (coming soon)\n' +
            '/mintnft - Mint your own NFT 🖼️ (coming soon)\n' +
            '/socials - Connect with us on social media 🌐');
    }
    else if (messageText === '/blogs') {
        const blogUrl = 'https://wdao.netlify.app/blog';
        const blogMessage = 'Explore web3 building and usage at our Blogs section: ' + blogUrl;
        const photoUrl = 'https://assets.finbold.com/uploads/2023/01/AllianceBlock-partners-with-ARTBANX-to-tokenize-physical-artwork-in-Web3-1024x822.jpg'; // Replace with your image URL
        bot.sendPhoto(chatId, photoUrl, { caption: blogMessage });
    }
    else if (messageText === '/events') {
        const eventsUrl = 'https://wdao.netlify.app/events';
        const eventsMessage = 'Discover upcoming and past events at our Events Calendar: ' + eventsUrl;
        const eventsPhotoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtY9bjT5nkQ6ZhfJjfl9W8rqEI6p51OkoC6A&s'; // Replace with your image URL for events
        bot.sendPhoto(chatId, eventsPhotoUrl, { caption: eventsMessage });
    }
    else if (messageText === '/projects') {
        const projectsUrl = 'https://wdao.netlify.app/projects';
        const projectsMessage = 'View student projects and submit yours at Project Showcase: ' + projectsUrl;
        const projectsPhotoUrl = 'https://beincrypto.com/wp-content/uploads/2023/10/bic_Web3_Marketing_4-covers_neutral.jpg.optimal.jpg'; // Replace with your image URL for projects
        bot.sendPhoto(chatId, projectsPhotoUrl, { caption: projectsMessage });
    }
    else if (messageText === '/news') {
        const newsUrl = 'https://wdao.netlify.app/news';
        const newsMessage = 'Stay updated with the latest news at our News section: ' + newsUrl;
        const newsPhotoUrl = 'https://blog.liquality.io/content/images/size/w2000/2023/05/Blog_Post_7.png'; // Replace with your image URL for news
        bot.sendPhoto(chatId, newsPhotoUrl, { caption: newsMessage });
    }
    else if (messageText === '/digiboard') {
        const digiboardUrl = 'https://wdao.netlify.app/digiboard';
        const digiboardMessage = 'Preview upcoming events at our Digiboard: ' + digiboardUrl;
        const digiboardPhotoUrl = 'https://www.mckinsey.com/~/media/mckinsey/featured%20insights/mckinsey%20explainers/what%20is%20web3/what-is-web3-1500238081-thumb-1536x1536.jpg'; // Replace with your image URL for digiboard
        bot.sendPhoto(chatId, digiboardPhotoUrl, { caption: digiboardMessage });
    }
    else if (messageText === '/review') {
        const reviewUrl = 'https://wdao.netlify.app/review';
        const reviewMessage = 'Share your ideas and feedback with us: ' + reviewUrl;
        const reviewPhotoUrl = 'https://media.licdn.com/dms/image/D4E12AQFzsYw634se_A/article-cover_image-shrink_720_1280/0/1690658372470?e=2147483647&v=beta&t=Ee-PvDzfScBheZsZU1dJzZgOKPEVvp8n7sg1XF9UGbU'; // Replace with your image URL for review
        bot.sendPhoto(chatId, reviewPhotoUrl, { caption: reviewMessage });
    }
    else if (messageText === '/stress') {
        const stressMessage = 'Take a break with stress relief games 🎮 (coming soon).\nStay tuned for updates!';
        const stressPhotoUrl = 'https://play-lh.googleusercontent.com/REEJXluApqi88uPm6T0le4RQyUP5s58RxAgvUDtoPCz0KgzzDKLrrE_Cb9JMKj4_tYY'; // Replace with your image URL for stress
        bot.sendPhoto(chatId, stressPhotoUrl, { caption: stressMessage });
    }
    else if (messageText === '/mintnft') {
        const mintnftMessage = 'Mint your own NFT 🖼️ (coming soon).\nStay tuned for updates!';
        const mintnftPhotoUrl = 'https://www.ledgerinsights.com/wp-content/uploads/2022/08/nft-ticket-810x524.jpg'; // Replace with your image URL for mintnft
        bot.sendPhoto(chatId, mintnftPhotoUrl, { caption: mintnftMessage });
    }
    else if (messageText === '/socials') {
        const socialsMessage = 'Connect with us on social media:';
        const socialsLinks = [
            { name: 'LinkedIn', url: 'https://www.linkedin.com/company/wallsteet-dao-club-klh/about/' },
            { name: 'Instagram', url: 'https://www.instagram.com/wall_street_klh/' },
            { name: 'Twitter', url: 'https://x.com/members36136' },
            { name: 'Medium', url: 'https://medium.com/@wallstreetclub_83221' },
            { name: 'GitHub', url: 'https://github.com/WallstreetDAO-KLH' },
            { name: 'Hashnode', url: 'https://hashnode.com/@wallstreetdao' },
            { name: 'YouTube', url: 'https://www.youtube.com/@wallstreetdao' },
            { name: 'Luma', url: 'https://lu.ma/user/ws_dao' }
        ];

        // Prepare the message with clickable links
        let socialsResponse = socialsMessage + '\n\n';
        socialsLinks.forEach((social) => {
            socialsResponse += `[${social.name}](${social.url})\n`;
        });

        // Replace with your image URL for socials
        const socialsPhotoUrl = 'https://s3artstore.com/cdn/shop/articles/Social_Networks_Article_16x9_cover_01_3000x.jpg?v=1641663970';
        bot.sendPhoto(chatId, socialsPhotoUrl, { caption: socialsResponse, parse_mode: 'Markdown' });
    }
    else {
        bot.sendMessage(chatId, 'Invalid command. Type /help for a list of available commands.');
    }
});
