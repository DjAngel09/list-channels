import { generateDateFrom } from "../../../resources/helpers/generateDateFrom";
import { getChannels } from "../../../resources/helpers/getChannels";

describe('getChannels', () => {

  // Returns data from API when called with valid parameters
  it('should return data from API when called with valid parameters', async () => {
    const {dateFor, dateTo} = generateDateFrom();
    const mockResponse = { data: 'mock data' };
    const mockFetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });
    global.fetch = mockFetch;

    const result = await getChannels();

    expect(mockFetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_URL}&date_from=${dateFor}&date_to=${dateTo}&quantity=200`
    );
    expect(result).toEqual(mockResponse);
  });

  // Returns error when API URL is invalid
  it('should return error when API URL is invalid', async () => {
    const {dateFor, dateTo} = generateDateFrom();
    const mockError = new Error('Invalid API URL');
    const mockFetch = jest.fn().mockRejectedValue(mockError);
    global.fetch = mockFetch;

    const result = await getChannels();

    expect(mockFetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_URL}&date_from=${dateFor}&date_to=${dateTo}&quantity=200`
    );
    expect(result).toEqual(mockError);
  });
});