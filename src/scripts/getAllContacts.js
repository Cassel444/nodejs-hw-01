import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        const contacts = JSON.parse(data);
        return contacts;
    } catch (err) {
        console.error("Error getting contacts:", err);
    }
};

console.log(await getAllContacts());
