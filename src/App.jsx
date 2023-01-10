import './App.css'
import Banner from './components/banner/Banner'
import { ColorSchemesExample } from './components/header/Header'
import Title from './components/title/Title'
function App() {

  return (
    <div className="App">
      <ColorSchemesExample/>
      <Title title={'Titulo Principal'}/>
      <Banner/>
    </div>
  )
}

export default App
