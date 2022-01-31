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
            'SA0 fault in an input of an AND gate and an SA0 fault in the output of another AND gate',
            'SA1 fault in an input of OR gate and an SA1 fault in output of another OR gate',
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
    [
        'Which stuck at fault will be detected for the input A = 1, B = 1',
        'q3.png',
        [
            'Stuck at 1 for wire Sai',
            'Stuck at 1 for wire Sbi',
            'Stuck at 0 for wire Saii',
            'Stuck at 1 for wire Sbii',
        ],
        3
    ],
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
    ],
    [
        'How many stuck at faults can be detected by the input X = 0, Y = 1 in the half adder shown below?',
        'q1.png',
        [
            '4',
            '5',
            '6',
            '7'
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