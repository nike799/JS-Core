function solve() {
    let answerElements = document.getElementsByClassName('answer-wrap');
    let sectionElements = document.getElementsByTagName('section');
    let answersCollector = [];
    let rightAnswers = ["onclick","JSON.stringify()","A programming API for HTML and XML documents"];
    let index1 = 0;
    Array.from(answerElements).forEach(div => div.addEventListener('click', getAnswer));

    function getAnswer(e) {
        let clickedElement = e.target;
        let answer = clickedElement.firstChild.textContent;
        answersCollector.push(answer);
        if(index1 < sectionElements.length-1) {
            sectionElements[index1++].style.display = 'none';
            sectionElements[index1].style.display = 'block';
        }else {
            let resultElement = document.getElementById('results').children[0].children[0];
            let index =0;
            let countRightAnswers =0;
            answersCollector.forEach(gaveAnswer =>{
                if(gaveAnswer === rightAnswers[index++]){
                    countRightAnswers++;
                }
            });
            let result = document.getElementById('results').style.display = 'block';
            sectionElements[index1].style.display = 'none';
            resultElement.textContent = countRightAnswers === rightAnswers.length ?  'You are recognized as top JavaScript fan!'
                : `You have ${countRightAnswers} right answers`;
        }
    }

}
