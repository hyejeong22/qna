// app/qna/write/page.tsx

import AuthGuard from '@/components/AuthGuard'

export default function WritePage() {
  return (
    <AuthGuard>
      <div style={{ padding: '20px' }}>
        <h2>질문 작성</h2>
        <form>
          <div>
            <label>제목: </label>
            <input
              type="text"
              placeholder="제목을 입력하세요"
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          </div>
          <div>
            <label>내용: </label>
            <textarea
              placeholder="질문 내용을 입력하세요"
              style={{
                width: '100%',
                padding: '8px',
                height: '100px',
                marginBottom: '10px',
              }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px' }}>
            등록하기
          </button>
        </form>
      </div>
    </AuthGuard>
  )
}
