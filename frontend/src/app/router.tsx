import { createBrowserRouter } from 'react-router'
import { CreateDocumentPage } from '../pages/CreateDocumentPage'
import { HomePage } from '../pages/HomePage'
import { ResultPage } from '../pages/ResultPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/create',
    element: <CreateDocumentPage />,
  },
  {
    path: '/documents/new',
    element: <CreateDocumentPage />,
  },
  {
    path: '/documents/result',
    element: <ResultPage />,
  },
])
