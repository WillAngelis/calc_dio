import { screen, render } from '@testing-library/react';
import { Header } from '.';

describe('Header Component', () => {
    it('should render Header title "Calc" ', () => {
        render(<Header />);
        const h1 = screen.getByRole('heading');

        expect(h1).toBeInTheDocument();
    });

    it('should render Header title "."', () => {
        render(<Header />);

        const span = screen.getByText('.');

        expect(span).toBeInTheDocument();
    });

    it('header title has the correct text color and font weight', () => {
        render(<Header />);

        const h1 = screen.getByRole('heading');
        const span = screen.getByText('.');

        expect(h1).toHaveClass('font-bold');
        expect(span).toHaveClass('text-primary font-bold');
    });

    it('renders the close icon', () => {
        render(<Header />);

        const closeIcon = screen.getByTitle('close icon');
        expect(closeIcon).toBeInTheDocument();
    });

    it('renders the menu icon', () => {
        render(<Header />);

        const menuIcon = screen.getByTitle('menu icon');
        expect(menuIcon).toBeInTheDocument();
    });
});
