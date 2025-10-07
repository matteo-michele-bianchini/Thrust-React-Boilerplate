import { render, screen } from '@testing-library/react'

const Login = () => <>login</>

test('First dummy test', () => {
    render(
        <Login />
    );
    expect(screen.getByText('login')).toBeInTheDocument();

});
