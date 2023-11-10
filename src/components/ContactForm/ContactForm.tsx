import React, { useState } from "react";
import { ContactModelType, Contact } from "../../types/contact";
import styles from "./ContactForm.module.scss";
import { Avatar } from "@/components/Icons/Icons";
import { Button } from "@/components/Buttons/Buttons";

interface ContactFormProps {
  contact: ContactModelType;
  onClose: () => void;
  addContact: (contact: Contact) => void;
  editContact: (contactId: number, updatedInfo: Contact) => void;
  isEdit: boolean;
}

const initFormData = {
  first_name: "",
  last_name: "",
  job: "",
  description: "",
  id: -1,
};

const ContactForm: React.FC<ContactFormProps> = ({
  isEdit,
  contact,
  onClose,
  addContact,
  editContact,
}) => {
  const contactData: Contact = {
    id: contact.id,
    first_name: contact.firstName,
    last_name: contact.lastName,
    job: contact.job,
    description: contact.description,
  };
  const [formData, setFormData] = useState(isEdit ? contactData : initFormData);
  const isDisabled =
    !formData.first_name ||
    !formData.last_name ||
    !formData.job ||
    !formData.description;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isEdit) {
        if (!contact) {
          throw new Error("Contact is not found");
        }
        await editContact(contact.id, formData);
      } else {
        await addContact(formData);
      }
      setFormData(initFormData);
    } catch (error) {
      console.error("Failed to add contact", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <Avatar />
      <br />
      <input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        name="job"
        value={formData.job}
        onChange={handleChange}
        placeholder="Job"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <div className={styles.formFooter}>
        <Button variant="base" onClick={() => onClose()}>
          cancel
        </Button>
        <Button
          variant={`${isDisabled ? "base" : "success"}`}
          type="submit"
          disabled={isDisabled}
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
