import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa'

const providers = [
  { name: 'Google', icon: <FaGoogle />, size: '40px', bgcolor: 'blue' },
  { name: 'Twitter', icon: <FaTwitter /> , size: '40px', bgcolor: 'blue' },
  { name: 'Facebook', icon: <FaFacebook />, size: '40px', bgcolor: 'blue' },
]

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon, size, bgcolor }) => (
      <Button key={name} width="full">
        <VisuallyHidden boxSize={size} backgroundColor={bgcolor}>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
)