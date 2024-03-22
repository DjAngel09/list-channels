import { render } from '@testing-library/react';
import { ModalComponent } from '../../../resources/components/ModalComponent';

describe('InfoEvent Component', () => {

  it('renders without crashing', () => {
    const children = 'Hola mundo'
    
    const { getByText } = render(<ModalComponent children={children} open={true} />);
    expect(getByText('Hola mundo')).toBeInTheDocument();
  });

  it('should render nothing when open is false and no children are provided', () => {
    const { container } = render(
      <ModalComponent />
    );
    expect(container.firstChild).toBeNull();
  });

});
