var textarea = document.querySelector('textarea'),
    messages = document.querySelector('ul'),
    timer = 0,
    g = GroomBot(
        ['', 'zzz.', 'uhm...', 'uhm ', 'Então...', 'oi. ', 'oi ', 'OI ', '...', 'Hum.', 'Hmmmm...', 'Errrm...', 'mmmm...', ''],
        ['OK', 'ok', 'Parece legal', 'legal', 'achei legal', 'parece legal', 'whatever', 'você que sabe', 'pode ser.',
         ' até que pode ser', 'você está certa.', 'parece OK', 'parece caro mas ok']);
 g.seed(function () {
     return Math.round(Math.random() * 1000);
 });
document.querySelector('input[type=submit]').addEventListener('click', function (ev) {
    var bride_msg = document.createElement('li'),
        groom_msg = document.createElement('li'),
        bride_avatar = document.createElement('span'),
        groom_avatar = document.createElement('span');
    if (textarea.value.length === 0)
        return ;
    bride_msg.className = 'bride';
    bride_avatar.className = 'avatar';
    bride_msg.appendChild(bride_avatar);
    bride_msg.innerHTML += textarea.value;
    textarea.value = '';
    messages.appendChild(bride_msg);

    groom_msg.className = 'groom hidden';
    groom_avatar.className = 'avatar';
    groom_msg.appendChild(groom_avatar);
    groom_msg.innerHTML += g.answer();
    messages.appendChild(groom_msg);

    clearTimeout(timer);
    timer = setTimeout(function () {
        groom_msg.className = 'groom';
    }, 3000);

    ev.preventDefault();
    ev.stopPropagation();
    return false;
});
