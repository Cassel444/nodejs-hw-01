import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        let data;
        try {
            data = await fs.readFile(PATH_DB, "utf-8");

        } catch (error) {
            if (error.code === "ENOENT") {
                data = "[]";
            } else {
                throw error;
            }

        }
        let contacts;
        try {
            contacts = JSON.parse(data);

        } catch (error) {
            contacts = [];
            console.error(error);
        }
        const newContact = createFakeContact();
        contacts.push(newContact);

        await fs.appendFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
        console.log('One contact added to the database.');
    } catch (error) {
        console.error('Error adding contact:', error);
    }
};

addOneContact();
