class question {

    constructor(statement, image, options, correct) {
        this.statement = statement;
        this.image = image;
        this.options = options;
        this.correct = correct;
    }
}

posttestQuestions = [
    [
        'In which of the following statements are the two faults equivalent?',
        undefined,
        [
            'SA0 fault in one of the inputs of AND gate and an SA0 fault in the other input of a different AND gate',
            'SA0 fault in an input of an AND gate and an SA0 fault in the output of another AND gate\n',
            'SA1 fault in an input of OR gate and an SA1 fault in output of another OR gate\n',
            'All of these'
        ],
        4
    ],

    [
        'How many inputs do we need to test to say without a doubt the HALF-ADDER(with 3 AND gates and an OR gate) has no faults in it?',
        'q1.png',
        [
            '1',
            '2',
            '3',
            '4'
        ],
        4
    ],
    // add here
    [
        'For X = 1 and Y = 0 in the following figure, select the correct statement',
        'q4.jfif',
        [
            'Output will be 1 with fault detected',
            'Output will be 0 with fault detected',
            'Output will be 1 with no fault detected',
            'Output will be 0 with no fault detected'
        ],
        3
    ]
]


function loadQuestions(){

    let questionsArr = []
    posttestQuestions.forEach(q => {
        questionsArr.push(new question(
            q[0],
            q[1],
            q[2],
            q[3]
        ));
    });
    return questionsArr;
}