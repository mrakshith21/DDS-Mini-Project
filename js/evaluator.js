function evaluateSubmission(questions){
    // let questions = document.getElementById(test_type).children;
    let correct = 0;
    for(let i = 0; i < questions.length; i++){
        let question = questions[i];
        console.log("Looking for ", 'q' + (i + 1) + 'o' + question.correct);
        for(let j = 0; j < question.options.length; j++){
            let option = document.getElementById('q' + (i + 1) + 'o' + (j + 1));
            let label = document.getElementById('q' + (i + 1) + 'o' + (j + 1) + 'label');
            if(option.checked){
                if(question.correct === j + 1){
                    label.style.color = '#388E3C';
                    correct++;
                }
                else{
                    label.style.color = 'red';
                }
            }
            else{
                label.style.color = 'black';
            }
        }
    }
    document.getElementById('result-div').style.visibility = 'visible';
    let result = document.getElementById('result');
    result.setAttribute('aria-valuenow', correct.toString());
    result.style.width = ((100 * correct) / questions.length).toString() + '%';
    document.getElementById('result-label').innerHTML = 'You answered ' + correct + ' out of ' + questions.length + ' questions correctly';
    window.scrollTo(0,document.body.scrollHeight);
}