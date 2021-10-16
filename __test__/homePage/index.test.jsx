/* eslint-disable react/prop-types */
import { render, screen } from '@testing-library/react'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import Home from '../../pages/index'

import jobs from '../../___mock___/jobs.json'

import { colors } from '../../styles/colors'

const theme = createTheme({
  colors,
})

const ThemeProvider = ({ children }) => (
  <WuiProvider theme={theme} useReset>
    {children}
  </WuiProvider>
)

describe('Home Page tests', () => {
  it('render Error Home Page Message', () => {
    render(
      <ThemeProvider>
        <Home error />
      </ThemeProvider>,
    )

    const errorTxt = screen.getByTestId('home-error-message')
    expect(errorTxt).toBeInTheDocument()
  })

  it('render Title on Home Page ', () => {
    render(
      <ThemeProvider>
        <Home data={jobs} error={false} />
      </ThemeProvider>,
    )

    const title = screen.getByTestId('home-page-title')
    expect(title).toBeInTheDocument()
  })

  it('render Search Text Input', () => {
    render(
      <ThemeProvider>
        <Home data={jobs} error={false} />
      </ThemeProvider>,
    )

    const searchInput = screen.getByTestId('job-search-input')
    expect(searchInput).toBeInTheDocument()
  })
})
