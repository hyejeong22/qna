// components/AuthGuard.tsx

'use client'

import { useUser } from '@clerk/nextjs' // Clerk.js 인증 훅
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface AuthGuardProps {
  children: React.ReactNode
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isSignedIn } = useUser() // 로그인 상태 확인
  const router = useRouter()

  useEffect(() => {
    if (!isSignedIn) {
      // 로그인 안 되어 있으면 로그인 페이지로 리다이렉트
      router.push('/auth/sign-in')
    }
  }, [isSignedIn, router])

  if (!isSignedIn) return null // 로그인 상태가 확인될 때까지 아무것도 렌더링하지 않음

  return <>{children}</>
}

export default AuthGuard
