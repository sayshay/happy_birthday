const questions = [
{
    question: 'Name a mythical creature with single large, pointed, spiraling horn projecting from its forehead.',
    answers: ['Pizza', 'Unicor’, cat']
},
{
    question: 'Name startup company valued at over $1 billion',
    answers: ['Dumpster', 'Unicorn', 'Cat']
},
{
    question: 'When thirsty what should you drink?',
    answers: ['Vodka', 'Water', 'Gasoline']
},
{
    question: 'When taking your employees out, you buy them:',
    answers: ['a pop (or a soda I guess)', 'pizza', 'SHOTS, SHOTS, SHOTS']
}


]

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('.question').innerHTML = questions[0].question;
    let step = 1;
    console.log(step)
    function nextQuestion(e) {

        e.preventDefault()
        console.log(step);
        document.querySelector('.question').innerHTML = questions[step].question;

        document.querySelectorAll('label span')[0].innerHTML = questions[step].answers[0];
        document.querySelectorAll('label span')[1].innerHTML = questions[step].answers[1];
        document.querySelectorAll('label span')[2].innerHTML = questions[step].answers[2];

        document.querySelector('.unicorn span').innerHTML = step;

        step += 1;

        if( step > 4) {
            setInterval(function(){ cornify_add(); }, 500);
        }
    }

    const labels = document.querySelectorAll('.buttons label');
    labels.forEach(panel => panel.addEventListener('click', nextQuestion));
});