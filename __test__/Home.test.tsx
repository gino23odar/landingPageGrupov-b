import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

it('renders learn react link', () => {
    render(<Home />);
    const linkElement = screen.getByText('Learn');
    expect(linkElement).toBeInTheDocument();
});