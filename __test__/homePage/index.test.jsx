/* eslint-disable react/prop-types */
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import Home from '../../pages/index'

import jobs from '../../___mock___/jobs.json'
import { FILTER_GROUP_OPTIONS, SECTOR, NONE } from '../../utils/constants'

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
    const dom = render(
      <ThemeProvider>
        <Home data={jobs} error={false} />
      </ThemeProvider>,
    )

    // In the Select component "data-testid" is passed down to all
    // the children, so in order to get only the parent use the "id"
    const select = dom.container.querySelector('#group-jobs-by')
    expect(select).toBeInTheDocument()
  })

  it('GroupBy Select default value', () => {
    const dom = render(
      <ThemeProvider>
        <Home data={jobs} error={false} />
      </ThemeProvider>,
    )

    // In the Select component "data-testid" is passed down to all
    // the children, so in order to get only the parent use the "id"
    const select = dom.container.querySelector('#group-jobs-by')
    const departmentOpt = FILTER_GROUP_OPTIONS.find(opt => opt.value === SECTOR)
    expect(select.textContent.includes(departmentOpt.label)).toBeTruthy()
  })

  it('Jobs are grouped by default', () => {
    render(
      <ThemeProvider>
        <Home data={jobs} error={false} />
      </ThemeProvider>,
    )

    const groupedListContainer = screen.getByTestId(
      'grouped-job-list-container',
    )
    expect(groupedListContainer).toBeInTheDocument()
  })

  it('With None option jobs should not be grouped', () => {
    const dom = render(
      <ThemeProvider>
        <Home data={jobs} error={false} />
      </ThemeProvider>,
    )

    // In the Select component "data-testid" is passed down to all
    // the children, so in order to get only the parent use the "id"
    const select = dom.container.querySelector('#group-jobs-by')
    userEvent.click(select)

    const nonGroupedOpt = FILTER_GROUP_OPTIONS.find(opt => opt.value === NONE)
    const noneGroupOption = screen.getByText(nonGroupedOpt.label)
    userEvent.click(noneGroupOption)

    const groupedListContainer = screen.getByTestId(
      'flat-job-list-container',
    )
    expect(groupedListContainer).toBeInTheDocument()
  })
})
