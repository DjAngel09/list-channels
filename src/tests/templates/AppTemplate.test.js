import { render, screen } from '@testing-library/react';

describe('AppTemplate', () => {

  // Renders loading message when channels are being fetched
  it('should render loading message when channels are being fetched', () => {
    // Mock the getChannels function to return a promise that never resolves
    jest.spyOn(getChannels, 'getChannels').mockResolvedValue(new Promise(() => {}));

    // Render the AppTemplate component
    const { getByText } = render(<AppTemplate />);

    // Assert that the loading message is rendered
    expect(getByText('Cargando...')).toBeInTheDocument();
  });

  // API request fails, renders error message
  it('should render error message when API request fails', async () => {
    // Mock the getChannels function to throw an error
    jest.spyOn(getChannels, 'getChannels').mockRejectedValue(new Error('API request failed'));

    // Render the AppTemplate component
    const { getByText } = render(<AppTemplate />);

    // Wait for the component to finish rendering
    await waitFor(() => {});

    // Assert that the error message is rendered
    expect(getByText('API request failed')).toBeInTheDocument();
  });
});