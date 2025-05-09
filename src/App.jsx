import './App.css'
import ActionButton from './components/actionButton/ActionButton'
import AnimatedSearchField from './components/animatedSearchField/AnimatedSearchField'
import SearchField from './components/searchField/SearchField'

function App() {

  return (
    <div className='componentContainer'>
      <AnimatedSearchField></AnimatedSearchField>
      <ActionButton></ActionButton>
      <SearchField></SearchField>
    </div>
  )
}

export default App
