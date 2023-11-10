import { fireEvent, render, screen } from "@testing-library/react";
import ContactsPage from "./contacts";
import { contactApi } from "../services/apiService";
import React from "react";

describe("ContactsPage", () => {
  test("renders without crashing", async () => {
    render(<ContactsPage />);
    expect(screen.getByText("Contacts")).toBeInTheDocument();
  });

  test("displays a message when there are no contacts", async () => {
    contactApi.getAll.mockResolvedValueOnce([]);
    render(<ContactsPage />);
    expect(await screen.findByText("No contacts found.")).toBeInTheDocument();
  });

  test("displays a list of contacts", async () => {
    const contacts = [
      { id: 1, name: "John Doe", email: "john.doe@example.com" },
      { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
    ];
    contactApi.getAll.mockResolvedValueOnce(contacts);
    render(<ContactsPage />);
    expect(await screen.findByText("John Doe")).toBeInTheDocument();
    expect(await screen.findByText("Jane Doe")).toBeInTheDocument();
  });

  test("adds a new contact", async () => {
    const newContact = { name: "Bob Smith", email: "bob.smith@example.com" };
    contactApi.add.mockResolvedValueOnce(newContact);
    render(<ContactsPage />);
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const addButton = screen.getByText("Add");
    fireEvent.change(nameInput, { target: { value: newContact.name } });
    fireEvent.change(emailInput, { target: { value: newContact.email } });
    fireEvent.click(addButton);
    expect(await screen.findByText(newContact.name)).toBeInTheDocument();
    expect(await screen.findByText(newContact.email)).toBeInTheDocument();
  });

  test("deletes a contact", async () => {
    const contactToDelete = {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    };
    contactApi.getAll.mockResolvedValueOnce([contactToDelete]);
    render(<ContactsPage />);
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);
    expect(
      await screen.queryByText(contactToDelete.name)
    ).not.toBeInTheDocument();
    expect(
      await screen.queryByText(contactToDelete.email)
    ).not.toBeInTheDocument();
  });

  test("updates a contact", async () => {
    const contactToUpdate = {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    };
    const updatedContact = {
      ...contactToUpdate,
      email: "john.doe.updated@example.com",
    };
    contactApi.getAll.mockResolvedValueOnce([contactToUpdate]);
    contactApi.update.mockResolvedValueOnce(updatedContact);
    render(<ContactsPage />);
    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);
    const emailInput = screen.getByLabelText("Email");
    const saveButton = screen.getByText("Save");
    fireEvent.change(emailInput, { target: { value: updatedContact.email } });
    fireEvent.click(saveButton);
    expect(await screen.findByText(updatedContact.name)).toBeInTheDocument();
    expect(await screen.findByText(updatedContact.email)).toBeInTheDocument();
  });
});
