import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from "./app/router";
// 렌더링을 쪼개서 실행할 수 있는 엔진 상태가 된다.
// 백그라운드 렌더링, 렌더링 멈추기 기능(동시성) 지원
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
