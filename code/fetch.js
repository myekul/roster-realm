// function fetchData(main = true) {
//     return gapi.client.sheets.spreadsheets.values.get({
//         spreadsheetId: '15kyyRcvTa8Yy3DQ_fQhTU8vJK-Vidro48iGxnT8Yz-M',
//         range: (main ? 'Main' : 'Custom') + '!A:P',
//     })
//         .then((response) => {
//             const values = response.result.values;
//             // console.log(values)
//             const chars = convertToObjects(values)
//             chars.forEach(char => {
//                 if (!main) {
//                     char.smash = 'Custom'
//                     char.origin = { series: char.series }
//                 } else {
//                     char.origin = games[char.origin]
//                 }
//             })
//             if (main) {
//                 allCharacters = chars
//             } else {
//                 allCharacters = [...allCharacters, ...chars]
//             }
//             if (main) {
//                 fetchData(false)
//             }
//             if (!main) {
//                 showTab(globalTab)
//             }
//         })
//         .catch((error) => {
//             console.error("Error fetching data: ", error.result.error.message);
//             throw error;
//         });
// }
function processData(data) {
    // console.log(data)
    const main = true
    const chars = convertToObjects(data)
    chars.forEach((char, index) => {
        char.index = index
        if (!main) {
            char.smash = 'Custom'
            char.origin = { series: char.series }
        } else {
            char.origin = games[char.origin]
        }
    })
    if (main) {
        allCharacters = chars
    } else {
        allCharacters = [...allCharacters, ...chars]
    }
    showTab(globalTab)
}