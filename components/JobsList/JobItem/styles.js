import styled from 'styled-components'
import { Box } from '@welcome-ui/box'

export const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;;
  row-gap: 8px;;
`

export const InfoListItem = styled.li`
  display: flex;
  align-items: center;
`

export const SeeMore = styled.h4.attrs(() => ({ role: 'button' }))`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary[500]};
  :hover {
    color: ${({ theme }) => theme.colors.primary[700]};
  }
  ::after {
    content: ' →';
  }
`

export const StyledBox = styled(Box)`
  display: grid;
  grid-template-columns: auto 100px;
  column-gap: ${({ theme }) => theme.space.md};
  
  @media(max-width: ${({ theme }) => theme.screens.sm}px) {
    grid-template-columns: 1fr;
    row-gap: ${({ theme }) => theme.space.md};
  }
`

export const AugmentedText = styled.div`
  p {
    text-align: justify;
  }
  p, ul {
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary[500]};
    text-decoration: underline;
    font-weight: bold;
    :hover {
      color: ${({ theme }) => theme.colors.primary[700]};
    }
  }
`
