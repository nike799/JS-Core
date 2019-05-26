function getData() {
    let data = JSON.parse(document.getElementById('input').children[0].value);
    let criteria = data.splice(data.length - 1);

    let peopleInPElement = document.getElementById('peopleIn').querySelector('p');
    let blacklistPElement = document.getElementById('blacklist').querySelector('p');
    let peopleOutPElement = document.getElementById('peopleOut').querySelector('p');

    let peopleIn = [];
    let peopleOut = [];
    let blacklist = [];

    data.forEach(obj => {
        switch (obj.action) {
            case "peopleIn":
                if (isPermitted(obj)) {
                    peopleIn.push(obj);
                }
                break;
            case "peopleOut":
                if (isPersonIn(obj)){
                    peopleOut.push(obj);
                }
                break;
            case "blacklist":
                blacklist.push(obj);
                if (isPersonIn(obj)){
                    peopleOut.push(obj);
                }
                break;
        }
    });
    let b = 5;
if (criteria[0].criteria !==''&& criteria[0].action !==''){
    switch (criteria[0].action) {
        case "peopleIn":
            peopleIn = peopleIn.sort((a,b)=> sortByGivenCriteria(a[criteria[0].criteria],b[criteria[0].criteria]));
            break;
        case "peopleOut":
            peopleOut = peopleOut.sort((a,b)=> sortByGivenCriteria(a[criteria[0].criteria],b[criteria[0].criteria]));
            break;
        case "blacklist":
            blacklist = blacklist.sort((a,b)=> sortByGivenCriteria(a[criteria[0].criteria],b[criteria[0].criteria]))
            break;
    }
}
    peopleIn.forEach(obj=>{
        peopleInPElement.textContent += `{"firstName":"${obj.firstName}","lastName":"${obj.lastName}"} `;
    });
    blacklist.forEach(obj=>{
        blacklistPElement.textContent += `{"firstName":"${obj.firstName}","lastName":"${obj.lastName}"} `;
    });
    peopleOut.forEach(obj=>{
        peopleOutPElement.textContent += `{"firstName":"${obj.firstName}","lastName":"${obj.lastName}"} `;
    });

    function isPersonIn(obj) {
        for (let i = 0; i < peopleIn.length; i++) {
            if (peopleIn[i].firstName === obj.firstName && peopleIn[i].lastName === obj.lastName) {
                peopleIn.splice(i,1);
                return true
            }
        }
        return false;
    }

    function isPermitted(obj) {
        for (let i = 0; i < blacklist.length; i++) {
            if (blacklist[i].firstName === obj.firstName && blacklist[i].lastName === obj.lastName) {
                return false
            }
        }
        return true;
    }

    function sortByGivenCriteria(a,b) {
        return a.localeCompare(b);
    }
}