import React, { useState, useContext } from "react";
import ContactCard from "../components/ContactCard/ContactCard";
import { contactApi } from "../services/apiService";
import { Contact } from "../types/contact";
import { ContactModelType } from "../types/contact";
import styles from "./ContactsPage.module.scss";
import Modal from "../components/Modal/Modal";
import ContactForm from "../components/ContactForm/ContactForm";
import NavBar from "../components/NavBar/NavBar";
import { IconButton } from "../components/Buttons/Buttons";
import { Add, Sort90, Sort09, SortZA, SortAZ } from "../components/Icons/Icons";
import ToastContext from "../contexts/ToastContext";

const initCardData = {
  firstName: "",
  lastName: "",
  job: "",
  description: "",
  fullName: "",
  id: -1,
};

const sortOptions = [
  { value: "asc-id", label: "id (asc)", icon: <Sort09 /> },
  { value: "desc-id", label: "id (desc)", icon: <Sort90 /> },
  { value: "asc-name", label: "Name (A-Z)", icon: <SortAZ /> },
  { value: "desc-name", label: "Name (Z-A)", icon: <SortZA /> },
];

export const getServerSideProps = async () => {
  try {
    let contacts = await contactApi.getAll();
    return { props: { contacts } };
  } catch (error) {
    console.error(error);
    return { props: { contacts: [] } };
  }
};

const ContactsPage = ({ contacts }: { contacts: ContactModelType[] }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [contactsList, setContactsList] =
    useState<ContactModelType[]>(contacts);
  const [formType, setFormType] = useState("");
  const [selectedCard, setSelectedCard] =
    useState<ContactModelType>(initCardData);
  const [sort, setSort] = useState("asc-id");
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error("ToastContainer must be used within a ToastProvider");
  }
  const { addToast } = toastContext;

  const handleAddContact = () => {
    setModalOpen(true);
    setFormType("add");
  };
  const handleEditContact = (id: number) => {
    setModalOpen(true);
    setFormType("edit");
    const selectedContact =
      contactsList.find((contactData) => contactData.id === id) || initCardData;
    setSelectedCard(selectedContact);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const addContact = async (newContact: Contact) => {
    try {
      const addedContact = await contactApi.add(newContact);
      setContactsList((pre) => [...pre, addedContact]);
      addToast("add contact success");
    } catch (error) {
      console.error("Failed to add contact", error);
      addToast("add contact failed");
    } finally {
      handleCloseModal();
    }
  };

  const deleteContact = async (contactId: number) => {
    try {
      await contactApi.delete(contactId);
      setContactsList((pre) =>
        pre.filter((contact) => contact.id !== contactId)
      );
      addToast("delete contact success");
    } catch (error) {
      addToast("delete contact failed");
      console.error("Failed to delete contact", error);
    }
  };

  const editContact = async (contactId: number, updatedInfo: Contact) => {
    try {
      const updatedContact = await contactApi.update(contactId, updatedInfo);
      setContactsList((pre) =>
        pre.map((contact) =>
          contact.id === contactId ? updatedContact : contact
        )
      );
      addToast("update contact success");
    } catch (error) {
      console.error("Failed to update contact", error);
      addToast("update contact failed");
    } finally {
      handleCloseModal();
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortOrder = event.target.value;
    const sortedContacts = [...contactsList].sort((a, b) => {
      switch (sortOrder) {
        case "asc-id":
          return a.id - b.id;
        case "desc-id":
          return b.id - a.id;
        case "asc-name":
          return a.fullName.localeCompare(b.fullName);
        case "desc-name":
          return b.fullName.localeCompare(a.fullName);
        default:
          return a.id - b.id;
      }
    });
    setSort(sortOrder);
    setContactsList(sortedContacts);
  };

  const renderSortIcon = () => {
    const sortOption = sortOptions.find((option) => option.value === sort);
    if (sortOption) {
      return sortOption.icon;
    }
    return null;
  };

  return (
    <>
      <NavBar heading={"Contacts"} link={{ url: "/", title: "Contact List" }}>
        <IconButton
          onClick={handleAddContact}
          data-testid="add-button"
          icon={<Add width={40} height={40} />}
        />
        <div className={styles.selectContainer}>
          {renderSortIcon()}
          <select
            onChange={handleSortChange}
            defaultValue="asc-id"
            className={styles.sortSelect}
          >
            {sortOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className={styles.optionItem}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </NavBar>

      <div className={styles.contactsContainer}>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ContactForm
            isEdit={formType === "edit"}
            contact={selectedCard}
            addContact={addContact}
            editContact={editContact}
            onClose={handleCloseModal}
          />
        </Modal>
        <div className={styles.contactsList}>
          {contactsList.length === 0 ? (
            <div className={styles.emptyContacts}>
              <p>No contacts found</p>
            </div>
          ) : (
            <>
              {contactsList.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  onDelete={deleteContact}
                  onEditContact={handleEditContact}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
