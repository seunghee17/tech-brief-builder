import { Link } from 'react-router'

export const HomePage = () => {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding:40 }}>
      <h1>Tech Brief Builder</h1>
      <p>
        산발적인 리서치 메모와 회의 내용을 팀 공유용 기술 문서로 변환합니다.
      </p>

      <Link to="/create">새 문서 만들기</Link>
    </main>
  )
}
