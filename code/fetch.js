function loadClient() {
    gapi.client.setApiKey(API_KEY);
    gapi.client.load('https://sheets.googleapis.com/$discovery/rest?version=v4')
        .then(() => {
            console.log("GAPI client loaded for API");
            fetchData(true)
        })
        .catch(error => {
            console.error("Error loading GAPI client: ", error);
        });
}
function fetchData(main) {
    return gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '15kyyRcvTa8Yy3DQ_fQhTU8vJK-Vidro48iGxnT8Yz-M',
        range: (main ? 'Main' : 'Custom') + '!A:P',
    })
        .then((response) => {
            const values = response.result.values;
            // console.log(values)
            const chars = convertToObjects(values)
            chars.forEach(char => {
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
            if (main) {
                fetchData()
            }
            if (!main) {
                showTab(page)
            }
        })
        .catch((error) => {
            console.error("Error fetching data: ", error.result.error.message);
            throw error;
        });
}
function convertToObjects(data) {
    const headers = data[0]; // First row of the dataset is data keys
    const rows = data.slice(1);
    const objects = [];
    rows.forEach(row => {
        let rowData = {};
        headers.forEach((header, index) => {
            rowData[header] = row[index];
        });
        objects.push(rowData);
    });
    return objects;
}