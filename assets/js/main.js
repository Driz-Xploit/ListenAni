let song = [
    '2121040569',
    '2124439581',
    '2223126578',
    '2271708806',
    '2240669675',
    '2239220642',
    '2135055399',
    '2265061565',
    '2186880508',
    '2148884283'
]
let template = (id) => `<iframe scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A${id}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"></iframe>`
function init() {
    document.querySelector('.title').onclick = () => window.location = 'home.html'
    let file = window.location.pathname.slice(1)
    document.querySelector(`.navbar a[href="${file}"]`).style.backgroundColor = 'red'
    file = file.split('.')[0]
    document.querySelector('title').textContent = file[0].toUpperCase() + file.slice(1) + "'s ListenAni" 
    let target = document.querySelector('.audio')
    if (file == 'home') {
        song.forEach(i => {
            target.innerHTML += template(i)
        });
    }
}
init()