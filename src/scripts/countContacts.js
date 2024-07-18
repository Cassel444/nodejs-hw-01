import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        const contacts = JSON.parse(data);
        return contacts.length;
    } catch (err) {
        console.error("Error counting contacts:", err);
    }
};

console.log(await countContacts());
