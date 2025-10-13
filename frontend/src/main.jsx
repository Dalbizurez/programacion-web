import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import TabController from './components/TabController.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TabController />
  </StrictMode>,
)
