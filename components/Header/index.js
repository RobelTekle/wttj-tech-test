import Link from 'next/link'
import { Box } from '@welcome-ui/box'
import Image from 'next/image'

const Header = () => (
  <Link href="/" passHref>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={{ xs: 'xs', md: 'md', lg: 'xl' }}
      backgroundColor="light.900"
      cursor="pointer"
    >
      <Image src="/wttj.svg" width={165} height={53} />
    </Box>
  </Link>
)

export default Header
