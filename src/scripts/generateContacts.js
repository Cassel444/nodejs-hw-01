import fs from 'fs/promises';
import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        let data;
        try {
            data = await fs.readFile(PATH_DB, 'utf-8');
        } catch (error) {
            if (error.code === 'ENOENT') {
                data = '[]';
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

        for (let i = 0; i <= number; i += 1) {
            contacts.push(createFakeContact());
        }

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
        console.log(`${number} contacts generated and added to the database.`);
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
};

generateContacts(5);
