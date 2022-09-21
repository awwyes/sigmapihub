import { Button } from '@chakra-ui/react'
import { useSession, signIn, signOut } from 'next-auth/react'


export default function OAuthButtonGroup() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Button onClick={() => signOut()}>Sign Out</Button>
      </>
    )
  }
  return (
    <>
      <Button onClick={() => signIn()}>Sign In</Button>
    </>
  )
}