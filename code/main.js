generateHTML()
gapi.load("client", loadClient);
function action() {
    globalSmash = document.getElementById('dropdown_game').value
    const omit = document.getElementById('checkbox_omit').checked
    if (globalSmash != 's6') {
        characters = allCharacters.filter(char => char[globalSmash])
    }
    if (omit) {
        characters = characters.filter(char => !char.omit)
    }
    switch (page) {
        case 'roster':
            generateRoster()
            break
        case 'list':
            generateList()
            break
    }
}
function generateHTML() {
    let HTMLContent = ''
    smashGames.forEach((game, index) => {
        HTMLContent += `<option value="s${index + 1}" ${game == globalSmash ? 'selected' : ''}>${game}</option>`
    })
    document.getElementById('dropdown_game').innerHTML = HTMLContent
}
function generateRoster() {
    const bySmash = document.getElementById('checkbox_bySmash').checked
    let HTMLContent = `<div>`
    if (bySmash) {
        smashGames.forEach(smash => {
            HTMLContent += `<div class='container'><img src='images/smash/${smash}.png' style='width:200px'></div>`
            HTMLContent += `<div class='container chars' style='padding-bottom:30px'>`
            characters.forEach(char => {
                if (char.smash == smash) {
                    HTMLContent += populateGrid(char)
                }
            })
            HTMLContent += `</div>`
        })
    } else {
        HTMLContent += `<div class='container chars'>`
        characters.forEach(char => {
            HTMLContent += populateGrid(char)
        })
        HTMLContent += `</div>`
    }
    HTMLContent += `</div>`
    document.getElementById('content').innerHTML = HTMLContent
}
function generateList() {
    let HTMLContent = `<div class='container'><table>`
    characters.forEach(char => {
        HTMLContent += `<tr>`
        HTMLContent += `<td>${charImage(char)}</td>`
        HTMLContent += `<td>${char.name}</td>`
        HTMLContent += `</tr>`
    })
    HTMLContent += `</table></div>`
    document.getElementById('content').innerHTML = HTMLContent
}
function populateGrid(char) {
    let HTMLContent = ''
    // if (!omit && char.omit || omit && !char.omit) {
    const series = document.getElementById('checkbox_series').checked
    HTMLContent += charImage(char)
    HTMLContent += series ? `<img src='images/series/${char.new ? 'custom/' : ''}${char.origin?.series}.png' style='width:80px;height:auto;background-color:${char[getColor()]}'>` : ''
    // }
    return HTMLContent
}
function getColor() {
    return globalSmash == 's4' ? 'color4' : 'coloru'
}
function charImage(char) {
    let charID = char.id
    if (charID < 10) {
        charID = '0' + char.id
    }
    if (char.e) {
        charID += 'e'
    }
    const smash = char.smash == 'Custom' ? 'Custom' : 'Ultimate'
    return `<img src='images/characters/${smash}/${charID}.png' style='width:80px;height:auto;background-color:${char[getColor()]}'>`
}
function showTab(tab) {
    page = tab
    buttonClick(page + 'Tab', 'tabs', 'active')
    action()
}
setFooter('2025')