const request = new XMLHttpRequest();

request.onreadystatechange = function(){
    if((request.status === 200) && (request.readyState === 4)) {
        const jsonData = JSON.parse(request.responseText).data;
        for (let i = 0, length = jsonData.length; i < length; i++) {
            let movie = jsonData[i];
            if (movie[10] === "Golden Gate Bridge") {
                document.getElementById("result").innerHTML +=  `${movie[8]}<br>${movie[9]}<br>${movie[12]}<br><br>`;
            }
        }
    }
};

request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');
request.send();