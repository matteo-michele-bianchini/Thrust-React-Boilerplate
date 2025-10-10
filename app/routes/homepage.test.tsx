import { render, screen } from '@testing-library/react'
import Homepage from '@/routes/homepage'

import { projectName } from '@/utils/constants/uiText'

test('First test', () => {
    render(
        <Homepage />
    )
    expect(screen.getByText(projectName)).toBeInTheDocument()
})