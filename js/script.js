const content    = $('.content   ')
const progress   = $('.progress  ')
const breadcrumb = $('.breadcrumb')
let   question   = 0
let   number     = 0
let   random     = qData.sort(() => 0.5 - Math.random());

function next(){

  //progress tracking
  question += 20
  number   += 1
  const comparison = $('.comparison')
  let answer = $('input').val()

  //initial state for next question
  $('.option').removeClass('selected not-selected')
  comparison.addClass('bye');
  $('input').addClass('bye');

  //subheader changes
  progress   .css('width',`${question}%` )
  breadcrumb.text(`Question ${number  }` )

  //images
  if (number < qData.length+1){ setTimeout(function () {
        const option = $('.option')


        comparison.html(qData[number-1].images.map(value =>
        `<div class='card option ${value.value}' vc>
          <img src='${value.pic}' height=300px>
        </div>`))


        //select
        $('.option').click(function(){
          $('.option').removeClass('selected')
          $(this).addClass('selected').removeClass('not-selected')
          $('.option').not(this).addClass('not-selected')

          $(this).hasClass('a') ?
          qData[number-1].answer = 'a' :
          qData[number-1].answer = 'b'
        })


        setTimeout(function() {
          comparison.removeClass('bye')
          $('input').removeClass('bye');
        }, 10);

    }, 600);
  }


  //comment
  if (number >= 2){
    qData[number-2].comment = answer
    $('input').val('') //clears input
  }

  if(number == 1){
    comparison.after(`
      <input class='bye' placeholder='Add Comment (Optional)'/>`)
    $('button').text('Next')
  }

  //complete test
  if ( number == qData.length+1){
    confetti()
    $('button').remove()
    $('a').remove()
    $('h2').eq(1).text('Congratulations')
    $('p').text('You have finished the test, your data has been sent to our servers and some more text here explaining how to fill their personal information')
    $('p').after(`<p>Your Score is </p> <h1 style='font-size:4em'>🥟</h1> <br> <p>Just kidding. Not scoring systems has been set up in place </p>`)
  }
}

//previous
function restart(){
  question = 0
  number   = 0
  progress.css('width',`${question}%`)
  breadcrumb.text(`Introduction` )
}

//Submit to db
// function submit(){
//   random.sort()
//   //here it is pushed to database
// }

const data = {
  title:'Visual Examination',
  description:'Use your senses and attention to detail to find the differences between these images and choose the one with the best application of typography, spacing and visual hierarchy.'
}




content.append(`
  <article>
    <h2>${data.title}</h2>
    <p> ${data.description}</p>
    <div class='comparison grid'>
      <div class='card cover'><img src='img/hero.jpg' height=300px/></div>
    </div>
    <div class='grid'>
    <button class='next' onClick='next()'> Start</button>
    </div>

  </article>
`)
