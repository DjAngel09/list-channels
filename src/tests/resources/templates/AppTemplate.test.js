import { render, screen } from "@testing-library/react";
import { AppTemplate } from "../../../resources/templates/AppTemplate";

describe('AppTemplate', () => {

  it('should render loading message when channels are being fetched', () => {
    render(<AppTemplate />);

    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });
  
});