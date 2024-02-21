import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import Provider from './context/Provider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <Provider>
              <App />
            </Provider>
        </QueryClientProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
