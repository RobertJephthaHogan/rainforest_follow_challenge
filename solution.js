
// make the initial request, then follow the 'follow' urls 
async function fetchAndFollow(url) {
    try {

        // Make the initial GET request
        let response = await fetch(url, { headers: { 'Accept': 'application/json' } });
        let data = await response.json();

        // Loop to follow the URLs
        while (data.follow) {
            response = await fetch(data.follow, { headers: { 'Accept': 'application/json' } });
            data = await response.json();
        }

        // return the final data when no more 'follow' URLs are found
        return data;
    } catch (error) {
        console.error("An error occurred:", error);
    }
}





fetchAndFollow('https://www.letsrevolutionizetesting.com/challenge').then(data => {
    console.log('Solution!', data)
})