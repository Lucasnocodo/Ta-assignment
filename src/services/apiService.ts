import axios from "axios";
import { Contact } from "../../src/types/contact";
import { ContactModel } from "../models/ContactModel";

const apiClient = axios.create({
  // baseURL: "https://tarokoserver.vercel.app/",
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const contactApi = {
  getAll: async () => {
    try {
      const response = await apiClient.get("/api/contacts");
      const contacts = response.data.data.map((contact: Contact) =>
        new ContactModel(contact).toJSON()
      );

      return contacts;
    } catch (error) {
      throw error;
    }
  },
  add: async (contactData: Contact) => {
    const response = await apiClient.post("/api/contacts", {
      contact: contactData,
    });

    return new ContactModel(response.data.data).toJSON();
  },
  update: async (contactId: number, contactData: Contact) => {
    const response = await apiClient.patch(`/api/contacts/${contactId}`, {
      info: contactData,
    });

    return new ContactModel(response.data.data).toJSON();
  },
  delete: async (id: number) => {
    const response = await apiClient.delete(`/api/contacts/${id}`);

    return response.data;
  },
};

export default apiClient;
