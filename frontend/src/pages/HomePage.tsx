import { Link } from 'react-router'
import { Button } from '../shared/components/Button'
import { Card } from '../shared/components/Card'

export function HomePage() {
  return (
    <main className="page home-page">
      <section className="page-header">
        <p className="eyebrow">Tech Brief Builder</p>
        <h1>기술 검토 문서를 빠르게 초안화하세요</h1>
        <p>
          주제와 맥락을 입력하면 공유 가능한 마크다운 문서와 품질 리포트를
          생성합니다.
        </p>
        <Button as={Link} to="/documents/new">
          문서 생성하기
        </Button>
      </section>

      <section className="overview-grid">
        <Card title="입력">
          <p>조사 주제, 문제 상황, 원하는 문서 유형을 한 화면에서 정리합니다.</p>
        </Card>
        <Card title="생성">
          <p>문서 생성 API를 호출하고 로딩, 성공, 실패 상태를 관리합니다.</p>
        </Card>
        <Card title="검토">
          <p>생성된 문서와 품질 리포트를 결과 화면에서 확인합니다.</p>
        </Card>
      </section>
    </main>
  )
}
