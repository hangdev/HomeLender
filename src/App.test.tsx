import {render, screen} from '@testing-library/react';
import App from './App';

it("should have NavStrip component", () => {
  render(<App/>);
  const message = screen.findAllByLabelText(/NavStrip/i);
  // const message = screen.queryByText(/HomeLend/i);
  expect(message).toBeVisible();
})