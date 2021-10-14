import { Box } from '@welcome-ui/box'
import Image from 'next/image'

const Header = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    p="md"
  >
    <Image src="/wttj.svg" width={165} height={53} />
  </Box>
)

export default Header
