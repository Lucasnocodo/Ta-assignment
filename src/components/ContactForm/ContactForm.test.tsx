import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "./ContactForm";

const mockAddContact = jest.fn();
const mockEditContact = jest.fn();
const mockOnClose = jest.fn();

const mockContact = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  fullName: "John Doe",
  job: "Developer",
  description: "Experienced software developer",
};

describe("ContactForm", () => {
  it("renders the add contact form with empty fields", () => {
    render(
      <ContactForm
        contact={mockContact}
        addContact={mockAddContact}
        editContact={mockEditContact}
        onClose={mockOnClose}
        isEdit={false}
      />
    );
  });

  it("calls addContact with the new contact data when form is submitted", () => {
    render(
      <ContactForm
        contact={mockContact}
        addContact={mockAddContact}
        editContact={mockEditContact}
        onClose={mockOnClose}
        isEdit={false}
      />
    );

    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "Jane" },
    });
    fireEvent.change(screen.getByPlaceholderText("Last Name"), {
      target: { value: "Smith" },
    });
    fireEvent.change(screen.getByPlaceholderText("Job"), {
      target: { value: "Designer" },
    });
    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "Creative designer" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Save" }));

    expect(mockAddContact).toHaveBeenCalledWith({
      first_name: "Jane",
      last_name: "Smith",
      job: "Designer",
      description: "Creative designer",
      id: -1,
    });
  });

  it("renders the edit contact form with pre-filled fields for an existing contact", () => {
    render(
      <ContactForm
        contact={mockContact}
        addContact={mockAddContact}
        editContact={mockEditContact}
        onClose={mockOnClose}
        isEdit={true}
      />
    );

    expect(
      (screen.getByPlaceholderText("First Name") as HTMLInputElement).value
    ).toBe(mockContact.firstName);
    expect(
      (screen.getByPlaceholderText("Last Name") as HTMLInputElement).value
    ).toBe(mockContact.lastName);
    expect((screen.getByPlaceholderText("Job") as HTMLInputElement).value).toBe(
      mockContact.job
    );
    expect(
      (screen.getByPlaceholderText("Description") as HTMLInputElement).value
    ).toBe(mockContact.description);
  });
});
