/* eslint-disable react/prop-types */
import { render, screen } from '@testing-library/react'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import Home from '../../pages/index'

import jobs from '../../___mock___/jobs.json'
import { FILTER_GROUP_OPTIONS, SECTOR } from '../../utils/constants'

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

  it('render Search', () => {
    render(
      <ThemeProvider>
        <Home data={jobs} error={false} />
      </ThemeProvider>,
    )

    const searchInput = screen.getByTestId('job-search-input')
    expect(searchInput).toBeInTheDocument()
  })

  it('render Search with Placeholder', () => {
    render(
      <ThemeProvider>
        <Home data={jobs} error={false} />
      </ThemeProvider>,
    )

    const searchInput = screen.getByTestId('job-search-input')
    expect(searchInput.placeholder).toBeDefined()
    expect(searchInput.placeholder).not.toBe('')
  })

  it('render GroupBy Select', () => {
    const result = render(
      <ThemeProvider>
        <Home data={jobs} error={false} />
      </ThemeProvider>,
    )

    // In the Select component "data-testid" is passed down to all
    // the children, so in order to get only the parent use the "id"
    const select = result.container.querySelector('#group-jobs-by')
    expect(select).toBeInTheDocument()
  })

  it('GroupBy Select default value', () => {
    const result = render(
      <ThemeProvider>
        <Home data={jobs} error={false} />
      </ThemeProvider>,
    )

    // In the Select component "data-testid" is passed down to all
    // the children, so in order to get only the parent use the "id"
    const select = result.container.querySelector('#group-jobs-by')
    const departmentOpt = FILTER_GROUP_OPTIONS.find(opt => opt.value === SECTOR)
    expect(select.textContent.includes(departmentOpt.label)).toBeTruthy()
  })
})
