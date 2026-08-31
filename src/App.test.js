// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders APIGateway title', () => {
    render(<App />);
    const titleElement = screen.getByText(/APIGateway/i);
    expect(titleElement).toBeInTheDocument();
});
