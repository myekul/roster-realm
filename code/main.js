gapi.load('client', () => loadClient(true));
initializeHash('home')
setFooter('2025')
setSidebar(generateSidebar())
    .then(() => {
        changeGame('s5', true)
    })
setTabs(['home', 'list', null, 'ballpit'])
// setTabs(['home', 'list', null, 'random', 'ballpit'])
function action() {
    const omit = document.getElementById('checkbox_omit').checked
    if (globalGame != 's6') {
        characters = allCharacters.filter(char => char[globalGame])
    }
    if (omit) {
        characters = characters.filter(char => !char.omit)
    }
    switch (globalTab) {
        case 'home':
            generateHome()
            break
        case 'list':
            generateList()
            break
        case 'random':
            generateRandom()
            break
        case 'ballpit':
            generateBallpit()
            break
    }
}
function getColor() {
    return globalGame == 's4' ? 'color4' : 'coloru'
}
function charImage(char, info) {
    let charID = char.id
    if (charID < 10) {
        charID = '0' + char.id
    }
    if (char.e) {
        charID += 'e'
    }
    const smash = char.smash == 'Custom' ? 'Custom' : 's5'
    const onclick = info ? `onclick="openModalRR('${char.index}')"` : ''
    return `<img src='images/characters/${smash}/${charID}.png' class='${info ? 'grow' : ''}' style='width:80px;height:auto;background-color:${char[getColor()]}' ${onclick}>`
}
function openModalRR(charIndex) {
    const char = allCharacters[charIndex]
    let HTMLContent = ''
    HTMLContent += `<div class='container'>${charImage(char)}</div>
    <div class='container font2' >${char.name}</div>`
    openModal(HTMLContent, 'INFO')
}
function generateSidebar() {
    let HTMLContent = ''
    smashGames.forEach(game => {
        HTMLContent += `<div class="container grow background2" style='width:100%' onclick="changeGame('${game}')"><img src="images/logo/${game}.png"></div>`
    })
    return HTMLContent
}
function changeGame(game, stop) {
    globalGame = game
    document.getElementById('sidebarLogo').src = `images/logo/${globalGame}.png`
    if (!stop) action()
}