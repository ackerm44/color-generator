import React, {useState } from 'react'
import Colors from './Colors'
import Form from './Form'


// import Values from 'values.js'

function App() {
  const [color, setColor] = useState('#39727f')

  return <main>
    <section className='container'>
      <h3>Color Generator</h3>
      <Form setColor={setColor}/>
    </section>
    <Colors color={color}/>
    </main>
}

export default App
