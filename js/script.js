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
  $('.option').removeClass('selected ')
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
        comparison.addClass('bye-left');


        //select
        $('.option').click(function(){
          $('.option').removeClass('selected')
          $(this).addClass('selected')

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



  //
  if ( number == qData.length+1){
    confetti()
    $('button').remove()
    $('h2').text('Congratulations')
    $('p').text('You have finished the test, your data has been sent to our servers and some more text here explaining how to fill their personal information')
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
  description:'Use your senses and attention to detail to find the differences between these images and select the one more visually balanced.'
}




content.append(`
  <article>
    <h2>${data.title}</h2>
    <p> ${data.description}</p>
    <div class='comparison grid'>
      <div class='card'><img src='https://airbnb.design/wp-content/uploads/2018/10/Illustration_cover.jpg' height=300px/></div>
    </div>
    <div class='grid'>
    <button class='next' onClick='next()'> Start</button>
    </div>

  </article>
`)
