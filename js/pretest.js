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
        3,
        'There are 10 wires in the half adder circuit and hence 10 fault sites'
    ],
    [
        'Which of the following is false? ',
        undefined,
        [
            'A wire can have only SA1 fault',
            'A wire can have only SA0 fault',
            'A wire can have both SA0 and SA1 fault at the same time',
            'None of these'
        ],
        3,
        'A wire cannot have both SA0 and SA1 faults at the same time'
    ],

    [
        'Which input can detect SA0 fault in line 1 or line 2 in the given figure?',
        'q2.jfif',
        [
            'A = 0, B = 0',
            'A = 0, B = 1',
            'A = 1, B = 0',
            'A = 1, B = 1'
        ],
        4,
        'When either of line 1 or line 2 is SA0, then the output is always 0. But for the input A = 1, B = 1, the output should be 1 and thus '
    ],
    [
        'Which of the following statements are true for the circuit in which signal line A has been damaged and broken?',
        undefined,
        [
            'There is a SA0 fault in signal line A',
            'There is a SA1 fault in signal line A',
            'It is not possible to say',
            'The fault in the circuit cannot be represented as SA0 or SA1'
        ],
        1
    ],
    [
        'Which of the following is true?',
        undefined,
        [
            'Only 1 test vector can be used to determine a particular stuck at fault',
            'Only 1 stuck at fault can be detected by a particular test vector',
            'Stuck at fault is a logical defect',
            'There can be multiple stuck at faults in the given circuit'
        ],
        4
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