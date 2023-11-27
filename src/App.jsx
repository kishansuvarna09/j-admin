import './App.css'
import Markdown from 'react-markdown'

const markdown = '# Welcome to *JT.*'

function App() {

  return (
    <>
      <Markdown>{markdown}</Markdown>
    </>
  )
}

export default App
