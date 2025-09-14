function generateRandom() {
    // Helper to get 5 unique random characters from the pool
    function getRandomChars(pool, count) {
        const copy = [...pool];
        const result = [];
        for (let i = 0; i < count && copy.length > 0; i++) {
            const idx = Math.floor(Math.random() * copy.length);
            result.push(copy.splice(idx, 1)[0]);
        }
        return result;
    }

    // Helper to get a random number 0-7
    function getRandomNumber() {
        return Math.floor(Math.random() * 8);
    }

    // Each player gets 5 unique characters (duplicates allowed between players)
    const player1Chars = getRandomChars(characters, 5);
    const player2Chars = getRandomChars(characters, 5);

    // Assign random numbers (duplicates allowed)
    const player1 = player1Chars.map(char => ({
        char,
        num: getRandomNumber()
    }));
    const player2 = player2Chars.map(char => ({
        char,
        num: getRandomNumber()
    }));

    // Render
    let HTMLContent = ''
    HTMLContent += `<img src='images/banner.png' class='container' style='width:700px'>`
    HTMLContent += `<div class='container' style='gap:150px'>`
    HTMLContent += processPlayer(player1, 1)
    HTMLContent += processPlayer(player2, 2)
    HTMLContent += `</div>`;

    document.getElementById('content').innerHTML = HTMLContent;
    function processPlayer(player, num) {
        const direction = num == 1 ? 'right' : 'left'
        let HTMLContent = ''
        // HTMLContent += `<div><div>Player ${num}</div>`;
        HTMLContent += `<div class='player${num}'>`
        player.forEach(entry => {
            HTMLContent += `
            <div class="container font2" style="flex-direction:${num == 1 ? 'row-reverse' : 'row'};justify-content:${direction};gap:10px">
                <div style='width:10px;text-align:center'>${entry.num || ''}</div>
                ${charImage(entry.char, true)}
                <div style='width:200px;text-align:${direction}'>${entry.char.name}</div>
            </div>`;
        });
        HTMLContent += `</div>`
        return HTMLContent
    }
}