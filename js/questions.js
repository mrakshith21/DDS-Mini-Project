const IMAGE_HEIGHT = '150';
const NUM_QUESTIONS = 5;
function writeQuestions(test_type){
    let questionsArr = loadQuestions();
    let questionsDiv = document.getElementById(test_type);
    let question_id = 1;
    questionsArr.forEach(question => {
        console.log(question.statement);
        console.log(question.image);
        console.log(question.options);
        console.log(question.correct);
        let questionDiv = document.createElement('div');
        questionDiv.classList.add("question");
        questionDiv.setAttribute('id', 'q' + question_id);
        let statement = document.createElement('p');
        statement.innerHTML = question_id + '. ' + question.statement;
        questionDiv.appendChild(statement);

        if(question.image !== undefined){
            let image = document.createElement('img');
            image.setAttribute('src', 'images/' + test_type + '/' + question.image);
            image.setAttribute('height', IMAGE_HEIGHT);
            image.classList.add('question-img');
            questionDiv.appendChild(image);
        }
        let option_id = 1;
        question.options.forEach(option => {
            let optionsDiv = document.createElement('div');
            optionsDiv.classList.add('form-check');
            let opt = document.createElement('input');
            let label = document.createElement('label');
            opt.setAttribute('type', 'radio');
            opt.setAttribute('name', question_id.toString());
            opt.setAttribute('id', questionDiv.getAttribute('id') + 'o'+ option_id);
            opt.classList.add('form-check-input');
            label.innerHTML = question.options[option_id - 1];
            label.classList.add('form-check-label');
            label.setAttribute('id', questionDiv.getAttribute('id') + 'o'+ option_id + 'label');

            option_id++;
            optionsDiv.appendChild(opt);
            optionsDiv.appendChild(label);
            questionDiv.appendChild(optionsDiv);
        });
        questionsDiv.appendChild(questionDiv);

        question_id++;
    })
}