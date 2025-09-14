function generateHome() {
    const bySmash = document.getElementById('checkbox_bySmash').checked
    let HTMLContent = `<div>`
    if (bySmash) {
        smashGames.forEach((smash, index) => {
            HTMLContent += `<div class='container'><img src='images/logo/${smash}.png' style='width:200px'></div>`
            HTMLContent += `<div class='container chars' style='padding-bottom:30px'>`
            characters.forEach(char => {
                if (char['s' + (index + 1)]) {
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
    function populateGrid(char) {
        let HTMLContent = ''
        const series = document.getElementById('checkbox_series').checked
        HTMLContent += charImage(char, true)
        if (series) HTMLContent += `<img src='images/series/${char.new ? 'custom/' : ''}${char.origin?.series}.png' style='width:80px;height:auto;background-color:${char[getColor()]}'>`
        return HTMLContent
    }
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
function generateBallpit() {
    document.getElementById('content').innerHTML = `<div id='ballpit'></div>`
    let HTMLContent = ''
    characters.forEach(char => {
        HTMLContent += `<div class='square'>${charImage(char)}</div>`
    })
    setBallpit(HTMLContent, 80)
}