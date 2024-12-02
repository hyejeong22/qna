// components/QnaTable.tsx

import React from 'react'

const QnaTable = () => {
  return (
    <div>
      <h2>Q&A 목록</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성시간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2021년 입고정보게시판 신설</td>
            <td>PLIPOP</td>
            <td>2021-01-26</td>
          </tr>
          {/* 추가 항목들 */}
        </tbody>
      </table>
    </div>
  )
}

export default QnaTable
