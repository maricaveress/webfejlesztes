document.addEventListener('DOMContentLoaded', function () {
    const shareButtonContainer = document.getElementById('megosztas');
    const messageInput = document.getElementById('uzenet');
    const url = window.location.href;

    // Check if the Web Share API is supported
    if (navigator.share) {
        createShareButton('Megosztás', shareUsingWebShareAPI);
    } else {
        console.log('Web Share API is not supported on this browser.');
        createSocialMediaShareButton('Facebook');
        createSocialMediaShareButton('Twitter');
        createSocialMediaShareButton('Instagram'); // Added Instagram button
    }

    function createShareButton(label, clickHandler) {
        const button = document.createElement('button');
        button.innerText = label;
        button.addEventListener('click', clickHandler);
        shareButtonContainer.appendChild(button);
    }

    function createSocialMediaShareButton(socialMedia) {
        createShareButton(socialMedia, function () {
            shareUsingSocialMedia(socialMedia);
        });
    }

    function shareUsingWebShareAPI() {
        navigator.share({
            title: 'Your Exchange Program',
            text: messageInput.value || 'Check out this exchange program!',
            url: url
        })
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.error('Error sharing:', error));
    }
    function shareUsingSocialMedia(socialMedia) {
        let socialMediaUrl;
    
        switch (socialMedia) {
            case 'Facebook':
                socialMediaUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
                break;
            case 'Twitter':
                socialMediaUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(messageInput.value || 'Check out this exchange program!');
                break;
            case 'Instagram':
                // Adjust this link according to your Instagram sharing needs
                socialMediaUrl = 'https://www.instagram.com/';
                break;
            default:
                break;
        }

        if (socialMediaUrl) {
            window.open(socialMediaUrl, '_blank', 'width=600,height=400');
        }
    }
});
