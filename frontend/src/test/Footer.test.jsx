import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer.jsx';
import { beforeEach, test } from 'vitest';
import { expect } from 'vitest';

describe('Footer testing', () => {
    beforeEach(() => {
        render(<Footer />);
    });

    test("should render copyright text", () => {
        const copyrightText = screen.getByText(/© 2024 InnovaTech/i);
        expect(copyrightText).toBeDefined();
    });

    test("should render About Us text", () => {
        const aboutUsText = screen.getByText(/About Us/i);
        expect(aboutUsText).toBeDefined();
    });

    test("should render License text", () => {
        const licenseText = screen.getByText(/License/i);
        expect(licenseText).toBeDefined();
    });
    test("should render Contribute text", () => {
        const contributeText = screen.getByText(/Contribute/i);
        expect(contributeText).toBeDefined();
    });
    test("should render Contact Us text", () => {
        const contactUsText = screen.getByText(/Contact Us/i);
        expect(contactUsText).toBeDefined();
    });
});