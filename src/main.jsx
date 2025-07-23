import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListadeTarefas from './ListaDeTarefas.jsx'
import GlobalStyle from './globalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <ListadeTarefas />
  </StrictMode>,
)
