import { render } from '@testing-library/react';
import { InfoEvent } from '../../../resources/components/InfoEventComponent';

describe('InfoEvent Component', () => {
  it('renders without crashing', () => {
    const event = {
      name: 'Test Event',
      initialHour: '09:00',
      endHour: '10:00',
      duration: '1 hour',
      description: 'This is a test event.'
    };
    render(<InfoEvent event={event} />);
  });

  it('displays event name correctly', () => {
    const event = {
      name: 'Test Event',
      initialHour: '09:00',
      endHour: '10:00',
      duration: '1 hour',
      description: 'This is a test event.'
    };
    const { getByText } = render(<InfoEvent event={event} />);
    expect(getByText('Test Event')).toBeInTheDocument();
  });

  it('displays event details correctly', () => {
    const event = {
      name: 'Test Event',
      initialHour: '09:00',
      endHour: '10:00',
      duration: '1 hour',
      description: 'This is a test event.'
    };
    const { getByText } = render(<InfoEvent event={event} />);
    expect(getByText('09:00Hs a 10:00Hs 1 hour')).toBeInTheDocument();
    expect(getByText('This is a test event.')).toBeInTheDocument();
  });
});
