import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FilterProvider } from './context/FilterContext.tsx'
import { CartProvider } from './context/CartContext.tsx'
import { Toaster } from './components/ui/sonner.tsx'

createRoot(document.getElementById('root')!).render(
 
  <StrictMode>
  <CartProvider>
<FilterProvider>
          <App/>
          <Toaster
          position="top-left"
          expand={true}
          richColors
          closeButton
          duration={3000}
        />
  </FilterProvider>
  </CartProvider>
     
  </StrictMode>,
)
