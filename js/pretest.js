class question {

    constructor(statement, image, options, correct) {
        this.statement = statement;
        this.image = image;
        this.options = options;
        this.correct = correct;
    }
}

pretestQuestions = [
    [
        'What are the total number of faults sites in the HALF-ADDER',
        'q1.png',
        [
            '5',
            '7',
            '10',
            '11'
        ],
        3
    ],
    [
        'Which of the following is false? ',
        undefined,
        [
            'A wire can have only SA1 fault',
            'A wire can have only SA0 fault',
            'A wire can have both SA0 and SA1 fault',
            'None of these'
        ],
        3
    ],

    [
        'Which input can detect SA0 fault in line 1 in the given figure?',
        'q2.jfif',
        [
            'A = 0, B = 0',
            'A = 0, B = 1',
            'A = 1, B = 0',
            'A = 1, B = 1'
        ],
        4
    ],
    [
        'Which of the following statements are true for the circuit in which signal line A has been damaged and broken?',
        undefined,
        [
            'There is a SA0 fault in signal line A',
            'There is a SA0 fault in signal line A',
            'It is not possible to say',
            'The fault in the circuit cannot be represented as SA0 or SA1'
        ],
        1
    ]
]

function loadQuestions(){

    let questionsArr = []
    pretestQuestions.forEach(q => {
        questionsArr.push(new question(
            q[0],
            q[1],
            q[2],
            q[3]
        ));
    });
    return questionsArr;
}