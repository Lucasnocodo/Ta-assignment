import React from "react";
import styles from "./ContactCard.module.scss";
import { ContactModelType } from "../../types/contact";
import { Avatar, Delete, Edit } from "@/components/Icons/Icons";
import { IconButton } from "../Buttons/Buttons";

interface CardProps {
  contact: ContactModelType;
  onDelete: (contactId: number) => void;
  onEditContact: (id: number) => void;
}

const ContactCard = ({ contact, onDelete, onEditContact }: CardProps) => {
  return (
    <div className={styles.contactCard}>
      <div className={styles.upperContent}>
        <div className={styles.Avatar}>
          <Avatar width={60} height={60} />
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.firstRow}>
            <p className={styles.name}>{contact.fullName}</p>
            <div className={styles.contactActions}>
              <IconButton
                icon={<Edit />}
                onClick={() => onEditContact(contact.id)}
              />
              <IconButton
                icon={<Delete />}
                onClick={() => onDelete(contact.id)}
              />
            </div>
          </div>
          <p>{contact.job}</p>
        </div>
      </div>
      <p className={styles.description}>{contact.description}</p>
    </div>
  );
};

export default ContactCard;
