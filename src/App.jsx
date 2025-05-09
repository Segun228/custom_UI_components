import './App.css'
import ActionButton from './components/actionButton/ActionButton'
import AnimatedSearchField from './components/animatedSearchField/AnimatedSearchField'
import SearchField from './components/searchField/SearchField'
import Stars from './components/stars/Stars.jsx'

function App() {

  return (
    <div className='componentContainer'>
      <AnimatedSearchField></AnimatedSearchField>
      <ActionButton></ActionButton>
      <SearchField></SearchField>
      <Stars rating={3}></Stars>
    </div>
  )
}

export default App
