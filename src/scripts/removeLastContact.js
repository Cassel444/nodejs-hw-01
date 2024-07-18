import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        let contacts = JSON.parse(data);

        if (contacts.length > 0) {
            contacts.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), "utf-8");
            console.log("The last contact have been deleted");
        } else {
            console.log("There is nothing to delete");
        }

    } catch (err) {
        console.error("Error deleting the last contact:", err);
    }
};

removeLastContact();
