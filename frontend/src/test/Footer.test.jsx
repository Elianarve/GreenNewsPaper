import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer.jsx';

test('renders footer text', () => {
    render(<Footer />);
    const footerText = screen.getByText(/InnovaTech · Todos los derechos reservados/i);
    expect(footerText).toBeDefined();
});
