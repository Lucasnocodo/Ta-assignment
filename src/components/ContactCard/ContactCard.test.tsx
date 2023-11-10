import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactCard from "./ContactCard";

// Mock the contact data
const mockContact = {
  id: 1,
  fullName: "John Doe",
  firstName: "John",
  lastName: "Doe",
  job: "Developer",
  description: "Enthusiastic developer with a passion for coding",
};

const mockOnDelete = jest.fn();
const mockOnEditContact = jest.fn();

describe("ContactCard", () => {
  it("calls onEditContact when edit button is clicked", () => {
    render(
      <ContactCard
        contact={mockContact}
        onDelete={mockOnDelete}
        onEditContact={mockOnEditContact}
      />
    );

    fireEvent.click(screen.getByTestId("edit-button"));

    expect(mockOnEditContact).toHaveBeenCalledWith(mockContact.id);
  });

  it("calls onDelete when delete button is clicked", () => {
    render(
      <ContactCard
        contact={mockContact}
        onDelete={mockOnDelete}
        onEditContact={mockOnEditContact}
      />
    );

    fireEvent.click(screen.getByTestId("delete-button"));

    expect(mockOnDelete).toHaveBeenCalledWith(mockContact.id);
  });
});
