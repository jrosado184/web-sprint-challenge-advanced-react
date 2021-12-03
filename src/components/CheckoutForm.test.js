import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText("First Name:");
  userEvent.type(firstName, "Javier");

  const lastName = screen.getByLabelText("Last Name:");
  userEvent.type(lastName, "Rosado");

  const address = screen.getByLabelText("Address:");
  userEvent.type(address, "123 main st");

  const city = screen.getByLabelText("City:");
  userEvent.type(city, "Philadelphia");

  const state = screen.getByLabelText("State:");
  userEvent.type(state, "pennsylvania");

  const zip = screen.getByLabelText("Zip:");
  userEvent.type(zip, "12345");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const message = screen.queryByTestId("successMessage");
  expect(message).toBeInTheDocument();
  expect(message).toHaveTextContent("Javier");
  expect(message).toHaveTextContent("Rosado");
  expect(message).toHaveTextContent("123 main st");
  expect(message).toHaveTextContent("Philadelphia");
  expect(message).toHaveTextContent("pennsylvania");
  expect(message).toHaveTextContent("12345");
});
