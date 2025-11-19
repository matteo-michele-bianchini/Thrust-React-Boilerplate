import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Homepage from '@/routes/homepage'
import { projectName } from '@/utils/constants/uiText'

test('First test', () => {
    render(
        <MemoryRouter>
            <Homepage />
        </MemoryRouter>
    )
    expect(screen.getByText(projectName)).toBeInTheDocument()
})