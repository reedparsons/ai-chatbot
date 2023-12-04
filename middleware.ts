export { auth as middleware } from '@/pages/api/auth/auth'

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
