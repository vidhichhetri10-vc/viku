/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const target = document.getElementById(pageId);

    if (target) {

        target.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    /* Reset Instagram story whenever it is opened */
    if (pageId === "instagram") {
        resetInstagramStory();
    }

}


/* =====================================================
   BOYFRIEND VERIFICATION
===================================================== */

const yesBoyfriend =
    document.getElementById("yesBoyfriend");

if (yesBoyfriend) {

    yesBoyfriend.addEventListener("click", () => {

        showPage("quiz");

        startQuiz();

    });

}



/* =====================================================
   SECURITY QUIZ
===================================================== */

const questions = [

    {
        question: "Where did we first interact?",
        options: [
            "DIT University",
            "Instagram",
            "Graphic Era",
            "A music event"
        ],
        answer: 1
    },

    {
        question: "What connected us before we properly knew each other?",
        options: [
            "Photography",
            "Gaming",
            "Flute",
            "College"
        ],
        answer: 2
    },

    {
        question: "When did we first meet in person?",
        options: [
            "June 10",
            "June 19",
            "February 13",
            "August 2"
        ],
        answer: 2
    }

];


let currentQuestion = 0;


function startQuiz() {

    currentQuestion = 0;

    displayQuestion();

}


function displayQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("questionNumber")
        .textContent = currentQuestion + 1;

    document.getElementById("quizQuestion")
        .textContent = q.question;


    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";


    document.getElementById("wrongMessage")
        .textContent = "";

    document.getElementById("retryButton")
        .classList.add("hidden");


    q.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className = "answer-btn";

        button.textContent = option;

        button.addEventListener("click", () => {

            checkAnswer(index);

        });

        answers.appendChild(button);

    });

}


function checkAnswer(index) {

    const q = questions[currentQuestion];

    if (index === q.answer) {

        currentQuestion++;

        if (currentQuestion >= questions.length) {

            showPage("access");

        } else {

            displayQuestion();

        }

    } else {

        const messages = [

            "Nice try, Viku. 😭",

            "Nope. I know you know this.",

            "Sir... please remember your own relationship.",

            "Wrong answer. Boyfriend privileges decreasing.",

            "Try again before I revoke access. 👀"

        ];

        const randomMessage =
            messages[Math.floor(
                Math.random() * messages.length
            )];

        document.getElementById("wrongMessage")
            .textContent = randomMessage;

    }

}



/* =====================================================
   VIDEO
===================================================== */

const laughVideo =
    document.getElementById("laughVideo");


if (laughVideo) {

    laughVideo.addEventListener("ended", () => {

        document.getElementById("videoFinished")
            .classList.remove("hidden");

    });

}



/* =====================================================
   FLIP CARDS
===================================================== */

document.querySelectorAll(".flip-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            card.classList.toggle("flipped");

        });

    });



/* =====================================================
   BOYFRIEND ARCADE
===================================================== */

const gameQuestions = [

    {
        question: "What did Vidhi first like about viki?",
        answers: [
            "that he plays flute",
            "that he used to update her about everything",
            "that he was cute",
            "that he had a good height"
        ],
        correct: 1
    },

    {
        question: "Why did Vidhu follow Viku back?",
        answers: [
            "He had a cute dog",
            "His profile picture had a flute",
            "He was famous",
            "She already knew him"
        ],
        correct: 1
    },

    {
        question: "When did we first meet in person?",
        answers: [
            "June 10",
            "June 19",
            "February 13",
            "August 2"
        ],
        correct: 2
    },

    {
        question: "When did Vidhu realize her feelings?",
        answers: [
            "June 10",
            "February 13",
            "August 17",
            "November 2025"
        ],
        correct: 0
    },

    {
        question: "When did we officially get together?",
        answers: [
            "June 10",
            "June 19",
            "August 2",
            "February 13"
        ],
        correct: 1
    },

    {
        question: "What is her favourite food?",
        answers: [
            "Pizza",
            "Momo",
            "Pani puri",
            "Burger"
        ],
        correct: 1
    },

    {
        question: "What is her favourite song?",
        answers: [
            "Haareya",
            "Be intehaan",
            "Sun le zara",
            "Samjhawan"
        ],
        correct: 0
    },

    {
        question: "What is the most important thing to Vidhi at this moment?",
        answers: [
            "Love",
            "Family",
            "Career",
            "Health"
        ],
        correct: 1
    },

    {
        question: "What is her love language?",
        answers: [
            "Physical touch",
            "Words of affirmation",
            "Acts of services",
            "Giving gifts"
        ],
        correct: 3
    },

    {
        question: "What is something you'd do that would be the end of your relationship?",
        answers: [
            "Sleeping without informing",
            "Lying",
            "Being sensitive",
            "Not being understanding"
        ],
        correct: 1
    }

];


let gameIndex = 0;


function loadGameQuestion() {

    const question =
        gameQuestions[gameIndex];


    document.getElementById("gameLevel")
        .textContent = gameIndex + 1;


    document.getElementById("gameQuestion")
        .textContent = question.question;


    const container =
        document.getElementById("gameAnswers");

    container.innerHTML = "";


    document.getElementById("gameMessage")
        .textContent = "";


    document.getElementById("gameContinue")
        .classList.add("hidden");


    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "game-answer";

        button.textContent = answer;

        button.addEventListener("click", () => {

            if (index === question.correct) {

                document.getElementById("gameMessage")
                    .textContent =
                    "CORRECT. Boyfriend privileges maintained. 😌";

                document.querySelectorAll(".game-answer")
                    .forEach(btn => {
                        btn.disabled = true;
                    });

                document.getElementById("gameContinue")
                    .classList.remove("hidden");

            } else {

                document.getElementById("gameMessage")
                    .textContent =
                    "Incorrect. The relationship historians are disappointed. 😭";

            }

        });

        container.appendChild(button);

    });

}


function nextGameQuestion() {

    gameIndex++;

    if (gameIndex >= gameQuestions.length) {

        document.getElementById("gameQuestion")
            .textContent =
            "LEVEL COMPLETE. 🎉";

        document.getElementById("gameAnswers")
            .innerHTML =
            "<p>You officially know our lore.</p>";

        document.getElementById("gameMessage")
            .textContent =
            "Boyfriend certification renewed.";

        document.getElementById("gameContinue")
            .classList.add("hidden");

        return;

    }

    loadGameQuestion();

}


loadGameQuestion();



/* =====================================================
   SECRET PASSWORD
===================================================== */

const unlockSecret =
    document.getElementById("unlockSecret");


if (unlockSecret) {

    unlockSecret.addEventListener("click", unlockSecretRoom);

}


function unlockSecretRoom() {

    const input =
        document.getElementById("secretPassword");

    const message =
        document.getElementById("secretMessage");

    const content =
        document.getElementById("secretContent");


    if (input.value.trim().toLowerCase() === "flute") {

        message.textContent =
            "Access granted. 🎶";

        content.classList.remove("hidden");

    } else {

        message.textContent =
            "Wrong password. Hint: think about how this started. 👀";

    }

}



/* =====================================================
   GIFT BOX
===================================================== */

const openGift =
    document.getElementById("openGift");


if (openGift) {

    openGift.addEventListener("click", () => {

        const box =
            document.getElementById("giftBox");

        box.classList.add("open");

        openGift.style.display = "none";


        setTimeout(() => {

            document.getElementById("proposal")
                .classList.remove("hidden");

        }, 900);

    });

}



/* =====================================================
   RUNAWAY NO BUTTON
===================================================== */

const noFinal =
    document.getElementById("noFinal");


const noMessage =
    document.getElementById("noMessage");


const noMessages = [

    "Nice try. 😭",

    "That button seems to have other plans.",

    "No is currently unavailable.",

    "Why are you trying to hurt the website? 😭",

    "The button has resigned.",

    "Please select the other suspiciously obvious option.",

    "Viku. Be serious. 👀",

    "ERROR 404: NO NOT FOUND."

];


function moveNoButton() {

    const button =
        document.getElementById("noFinal");


    const message =
        noMessages[
            Math.floor(
                Math.random() * noMessages.length
            )
        ];


    noMessage.textContent = message;


    button.style.position = "fixed";


    const padding = 30;

    const maxX =
        window.innerWidth -
        button.offsetWidth -
        padding;

    const maxY =
        window.innerHeight -
        button.offsetHeight -
        padding;


    const randomX =
        Math.max(
            padding,
            Math.random() * maxX
        );


    const randomY =
        Math.max(
            padding,
            Math.random() * maxY
        );


    button.style.left = randomX + "px";

    button.style.top = randomY + "px";

}


if (noFinal) {

    noFinal.addEventListener(
        "mouseenter",
        moveNoButton
    );

    noFinal.addEventListener(
        "touchstart",
        function(event) {

            event.preventDefault();

            moveNoButton();

        }
    );

}



/* =====================================================
   FINAL YES
===================================================== */

const yesFinal =
    document.getElementById("yesFinal");


if (yesFinal) {

    yesFinal.addEventListener("click", () => {

        document.getElementById("proposal")
            .classList.add("hidden");


        document.getElementById("finalMessage")
            .classList.remove("hidden");


        createHeartBurst();

    });

}



/* =====================================================
   HEART BURST
===================================================== */

function createHeartBurst() {

    const hearts = [
        "♡",
        "♥",
        "✦",
        "✨",
        "🎶"
    ];


    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("div");

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];


        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top =
            Math.random() * 100 + "vh";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.color =
            "#c96f83";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex = "9999";

        heart.style.animation =
            "heartFloat 3s ease forwards";


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 3000);

    }

}


const heartAnimationStyle =
    document.createElement("style");


heartAnimationStyle.textContent = `

@keyframes heartFloat {

    0% {
        opacity: 0;
        transform:
            translateY(30px)
            scale(.5)
            rotate(0deg);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translateY(-180px)
            scale(1.3)
            rotate(25deg);
    }

}

`;


document.head.appendChild(
    heartAnimationStyle
);

/* =====================================================
   INTERACTIVE INSTAGRAM STORY
   FIRST INTERACTION = FLUTE REEL COMMENT
===================================================== */

let currentIGStep = 1;


/* =====================================================
   SHOW INSTAGRAM STORY STEP
===================================================== */

function showIGStep(step) {

    const steps = document.querySelectorAll(".ig-step");

    steps.forEach(section => {
        section.classList.remove("active-ig-step");
    });

    const target = document.getElementById("igStep" + step);

    if (target) {

        target.classList.add("active-ig-step");

        currentIGStep = step;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =====================================================
   RESET INSTAGRAM STORY
===================================================== */

function resetInstagramStory() {

    currentIGStep = 1;

    document.querySelectorAll(".ig-step").forEach(step => {
        step.classList.remove("active-ig-step");
    });

    const firstStep = document.getElementById("igStep1");

    if (firstStep) {
        firstStep.classList.add("active-ig-step");
    }

    /* Reset reel */

    const reel = document.getElementById("reelPlaceholder");

    if (reel) {
        reel.classList.remove("playing");
    }

    const playButton = document.getElementById("reelPlay");

    if (playButton) {
        playButton.classList.remove("is-playing");
        playButton.textContent = "▶";
    }

    /* Reset comment */

    const comment = document.getElementById("vikuComment");

    if (comment) {
        comment.classList.remove("comment-highlight");
    }

    /* Reset follow */

    const followButton =
        document.getElementById("followButton");

    if (followButton) {

        followButton.classList.remove("following");

        followButton.textContent = "Follow";

    }

    /* Reset DM */

    resetDM();

}


/* =====================================================
   REEL PLAY
===================================================== */

function playReelStory() {

    const reel =
        document.getElementById("reelPlaceholder");

    const playButton =
        document.getElementById("reelPlay");

    const comment =
        document.getElementById("vikuComment");

    if (!reel || !playButton) return;


    reel.classList.add("playing");

    playButton.classList.add("is-playing");

    playButton.textContent = "♫";


    /*
       After the reel "plays",
       highlight the FIRST interaction.
    */

    setTimeout(() => {

        if (comment) {

            comment.classList.add(
                "comment-highlight"
            );

            comment.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    }, 900);

}


/* =====================================================
   FOLLOW INTERACTION
===================================================== */

const followButton =
    document.getElementById("followButton");


if (followButton) {

    followButton.addEventListener("click", () => {

        followButton.classList.add("following");

        followButton.textContent =
            "Following ✓";


        const status =
            document.getElementById("followStatus");


        if (status) {

            status.textContent =
                "The stranger from the reel was now in the notifications. 👀";

        }

    });

}


/* =====================================================
   INTERACTIVE DMS
===================================================== */

const dmMessages = [
    {
        sender: "received",
        text: "Hey :)"
    },

    {
        sender: "sent",
        text: "Heyy"
    },

    {
        sender: "received",
        text: "You play flute? Can we collab?"
    },

    {
        sender: "sent",
        text: "Yeah, sure. Aap dehradun se hi ho?"
    },

    {
        sender: "received",
        text: "Hnn ji, ap?"
    },

    {
        sender: "sent",
        text: "Mai bhi"
    },

    {
        sender: "received",
        text: "College?"
    },

    {
        sender: "sent",
        text: "DIT, aur aap?"
    },

    {
        sender: "received",
        text: "M graphic era"
    },

    {
        sender: "sent",
        text: "NO WAY 😭"
    }
];


let currentDM = 0;


/* =====================================================
   RESET DMS
===================================================== */

function resetDM() {

    currentDM = 0;

    const messages =
        document.querySelectorAll(".dm-message");

    messages.forEach((message, index) => {

        message.classList.remove(
            "visible-message"
        );

        if (index === 0) {

            message.classList.add(
                "visible-message"
            );

        }

    });


    const progress =
        document.getElementById("dmProgress");

    if (progress) {

        progress.textContent =
            "1 / " + dmMessages.length;

    }


    const nextButton =
        document.getElementById("nextDMButton");

    if (nextButton) {

        nextButton.style.display =
            "inline-block";

        nextButton.textContent =
            "NEXT MESSAGE →";

    }


    const connection =
        document.getElementById("dmConnection");

    if (connection) {

        connection.classList.remove(
            "show-connection"
        );

    }


    const continueButton =
        document.getElementById(
            "dmContinueButton"
        );

    if (continueButton) {

        continueButton.classList.remove(
            "show-continue"
        );

    }


    const reaction =
        document.querySelector(".dm-reaction");

    if (reaction) {

        reaction.classList.remove(
            "show-reaction"
        );

    }

}


/* =====================================================
   REVEAL NEXT DM
===================================================== */

function revealNextDM() {

    const messages = document.querySelectorAll(".dm-message");

    /* Show the next message */

    if (currentDM < dmMessages.length - 1) {

        currentDM++;

        const nextMessage = messages[currentDM];

        if (nextMessage) {

            nextMessage.classList.add("visible-message");

            setTimeout(() => {

                nextMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });

            }, 100);

        }

        /* Update progress */

        const progress =
            document.getElementById("dmProgress");

        if (progress) {

            progress.textContent =
                (currentDM + 1) +
                " / " +
                dmMessages.length;

        }

        /*
           When the 6th message appears,
           finish the DM section.
        */

        if (currentDM === dmMessages.length - 1) {

            const nextButton =
                document.getElementById("nextDMButton");

            if (nextButton) {
                nextButton.style.display = "none";
            }


            /* Show connection card */

            const connection =
                document.getElementById("dmConnection");

            if (connection) {

                setTimeout(() => {

                    connection.classList.add(
                        "show-connection"
                    );

                }, 400);

            }


            /* Show continue button */

            const continueButton =
                document.getElementById(
                    "dmContinueButton"
                );

            if (continueButton) {

                setTimeout(() => {

                    continueButton.classList.add(
                        "show-continue"
                    );

                    /* Make absolutely sure it is visible */
                    continueButton.style.display =
                        "inline-block";

                }, 700);

            }

        }

    }

}