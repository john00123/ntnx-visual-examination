const content    = $('.content   ')
const progress   = $('.progress  ')
const breadcrumb = $('.breadcrumb')
let   question   = 0
let   number     = 0
let   random     = qData.sort(() => 0.5 - Math.random());


//next
function next(){
  //progress tracking
  question += 5
  number   += 1
  //subheader changes
  progress.css('width',`${question}%`)
  breadcrumb.text(`Question ${number  }` )
  let answer = $('input').val()

  $('.comparison').html(random[number-1].images.map
    (value => `<div class='card' vc> <img src='${value}'> </div>`)
  )


  random[number-1].comment = answer
  $('input').val('');
  

  if(number == 1){
    $('.comparison').after(`<br><br><input placeholder='Add Comment (Optional)'/>`)
  }


  // TODO: push values into object withing the array at [number-1]
  // $('.card').html(questions[number].map(value=> `<img src='${value}'/>`))
}

//previous
function restart(){
  question = 0
  number   = 0
  progress.css('width',`${question}%`)
  breadcrumb.text(`Introduction` )
}

//Submit to db
function submit(){
  random.sort()
  //here it is pushed to database
}

const data = {
  title:'Visual Examination',
  description:'Use your senses and attention to detail to find the differences between these images and select the one more visually balanced.'
}


content.append(`
  <article>
    <h2>${data.title}</h2>
    <p> ${data.description}</p>
    <div class='comparison grid'>
      <div class='card'></div>
    </div>
    <div class='grid'>
    <button class='next' onClick='next()'> Start</button>
    </div>

  </article>
`)
