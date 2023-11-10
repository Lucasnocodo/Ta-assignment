import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ContactsPage from "./contacts";
import React from "react";

describe("ContactsPage", () => {
  test("renders without crashing", async () => {
    render(<ContactsPage />);
    expect(screen.getByText("Contacts")).toBeInTheDocument();
  });

  test("opens contact form modal when add button is clicked", async () => {
    const contactsList: never[] = [];
    jest.mock("../services/apiService", () => ({
      contactApi: {
        getAll: jest.fn().mockResolvedValue(contactsList),
        add: jest.fn(),
        delete: jest.fn(),
        update: jest.fn(),
      },
    }));
    render(<ContactsPage />);
    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);
    expect(screen.getByTestId("form-modal")).toBeInTheDocument();
  });
  test("opens contact form modal when add button is clicked", async () => {
    const contactsList: never[] = [];
    jest.mock("../services/apiService", () => ({
      contactApi: {
        getAll: jest.fn().mockResolvedValue(contactsList),
        add: jest.fn(),
        delete: jest.fn(),
        update: jest.fn(),
      },
    }));
    render(<ContactsPage />);
    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);
    expect(screen.getByTestId("form-modal")).toBeInTheDocument();
  });
});
