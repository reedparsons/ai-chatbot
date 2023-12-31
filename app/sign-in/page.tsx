import { auth } from '@/auth'
import { LoginButton } from '@/components/login-button'
import {GooLoginButton}  from '@/components/google-login-button'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const session = await auth()
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
    
  }
  return (
    <>
      <div>
        <div className="flex h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center py-10">
          <div className="my-2 w-auto">
            <LoginButton />
          </div>
          <div className="my-2 w-auto">
             {/* <GooLoginButton />  */}
          </div>
        </div>
      </div>
    </>
  )
}
