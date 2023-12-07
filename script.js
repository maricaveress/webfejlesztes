document.addEventListener('DOMContentLoaded', function () {
    const gombom = document.getElementById('megosztas');
    const uzenetem = document.getElementById('uzenet');
    const urlem = 'https://maricaveress.github.io/webfejlesztes/';

    if (navigator.share) {
        megosztasGomb('Megosztás', megosztasLinkkel);
    } else {
        socialMediaGomb('Facebook');
        socialMediaGomb('Gmail');
        socialMediaGomb('Twitter');
        socialMediaGomb('WhatsApp');

    }

    function megosztasGomb(label, clickHandler) {
        const button = document.createElement('button');
        button.innerText = label;
        button.addEventListener('click', clickHandler);
        gombom.appendChild(button);
    }

    function socialMediaGomb(socialMedia) {
        megosztasGomb(socialMedia, function () {
            meg+osztasSocialMediaval(socialMedia);
        });
    }

    function megosztasLinkkel() {
        navigator.share({
            title: 'Szuper cserediák program!',
            text: uzenetem.value || 'Ezt nézd, mire bukkantam!',
            url: urlem
        });
    }

    function megosztasSocialMediaval(socialMedia) {
        let socialMediaLink;

        switch (socialMedia) {
            case 'Facebook':
                socialMediaLink = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F` + encodeURIComponent(url) + `!%2F`;
                break;
            case 'Gmail':
                socialMediaLink = 'mailto:?subject=' + encodeURIComponent('Szuper cserediák program!') +
                    '&body=' + encodeURIComponent(uzenetem.value || 'Ezt nézd, mire bukkantam!\n\n' + url);
                break;
            case 'Twitter':
                socialMediaLink = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(uzenetem.value || 'Ezt nézd, mire bukkantam!!');
                break;
            case 'WhatsApp':
                socialMediaLink = 'https://api.whatsapp.com/send?text=' + encodeURIComponent('Szuper cserediák program! ' + (uzenetem.value || '') + '\n\n' + url);
                break;
            default:
                break;
        }

        if (socialMediaLink) {
            window.open(socialMediaLink, '_blank', 'width=700,height=500');
        }
    }
});