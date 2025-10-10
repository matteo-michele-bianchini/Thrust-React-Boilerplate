import { render, screen } from '@testing-library/react'
import { Welcome } from '@/welcome/welcome'

test('First test', () => {
    render(
        <Welcome />
    )
    expect(screen.getByText('React Router Docs')).toBeInTheDocument()

})