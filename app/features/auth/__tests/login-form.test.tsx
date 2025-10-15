import { fireEvent, render, screen } from '@testing-library/react'
import { LoginForm } from '@/features/auth/components/login-form'

describe.concurrent('Login', () => {
    render(
        <LoginForm />
    )
    test('Renders elements', () => {
        expect(screen.getByText('Login')).toBeInTheDocument()
        expect(screen.getByText('Email')).toBeInTheDocument()
        expect(screen.getByText('Password')).toBeInTheDocument()
    })

    test('Display error message', () => {

        const emailInput = screen.getByLabelText('email')
        const passwordInput = screen.getByLabelText('password')

        fireEvent.change(emailInput, { target: { value: 'wrong@mail.com' } })
        fireEvent.change(passwordInput, { target: { value: 'wrong@password.com' } })

        /* TODO: test error message is displayed */
    })
})