import { Link } from "react-router";

export const ResultPage = () => {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 40 }}>
      <h1>문서 생성 결과</h1>
      <p>아직 문서 생성 결과가 없습니다.</p>

      <Link to="/create">다시 만들기</Link>
    </main>
  );
};
