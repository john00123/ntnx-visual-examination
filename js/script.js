const content  = $('.content' )
const progress = $('.progress')
const level1   = $('.level1'  )
let   question = 0
let   number   = 0


function next(){
  question += 5
  number   += 1
  progress.css('width',`${question}%`)
  level1.text(`Question ${number  }` )
}

//previous
function back(){
  question -= 5
  number   -= 1
  progress.css('width',`${question}%`)
  level1.text(`Question ${number  }` )

}


content.append(`
  <article>
    <h2>Visual Examination</h2>
    <p>Use your senses and attention to detail to find the differences between these images. <br>Select the one more visually balanced.
    <br>This evaluation has no weight on our evaluation process.</p>
    <br>
    <div class='grid'>
      <div class='card'></div>
    </div>
    <br><br>
      <input placeholder='Add Comment (Optional)'></input>
    <br>
    <div class='grid'>
    <button class='next' onClick='next()'> Start</button>
    </div>

  </article>
`)

const data={
}

content.append(`
  <article>
    <h2>Visual Examination</h2>
    <p>Typographic decisions are usually made on a brand level—with considerations for look, feel, and accurate expression of a brand’s desired direction. But what about UI? It’s often referenced that 90% of UI is text, which holds true for Airbnb, so changing the typeface brought a significant change to our UI design.</p>
    <div class='grid'>
      <div class='card'></div>
      <div class='card'></div>
    </div>
    <br><br>
      <input placeholder='Add Comment (Optional)'></input>
    <br>
    <div class='grid'>
      <button class='next' onClick='next()'> Skip</button>
      <button class='next' onClick='next()'> Neext</button>
    </div>
  </article>
`)
