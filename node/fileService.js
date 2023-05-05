import fs from "fs";

const dbPath = "./db/db.json";

class FileService {
  getAllUsers() {
    const db = fs.readFileSync(dbPath);
    return JSON.parse(db);
  }

  addUser(user) {
    const db = fs.readFileSync(dbPath);
    const parsedDb = JSON.parse(db);
    const id = parsedDb.length;
    const newUser = {
      id,
      name: user.name,
      phone: user.phone,
      emai: user.email,
      address: {
        city: user.city,
        street: user.street,
      },
    };

    parsedDb.push(newUser);

    fs.writeFile(dbPath, JSON.stringify(parsedDb, null, 4), (err) => {
      if (err) throw err;
    });

    return parsedDb;
  }

  deleteUser(userId) {
    const db = fs.readFileSync(dbPath);
    const parsedDb = JSON.parse(db);

    const updatedDb = parsedDb.filter((item) => item.id !== userId);
    updatedDb.map((item, index) => (item.id = index + 1));

    fs.writeFile(dbPath, JSON.stringify(updatedDb, null, 4), (err) => {
      if (err) throw err;
    });

    return updatedDb;
  }

  editUser({ id, userValues }) {
    const db = fs.readFileSync(dbPath);
    const parsedDb = JSON.parse(db);

    const user = parsedDb.find((user) => user.id === id);
    user.name = userValues.name;
    user.phone = userValues.phone;
    user.email = userValues.email;
    user.address.street = userValues.street;
    user.address.city = userValues.city;

    fs.writeFile(dbPath, JSON.stringify(parsedDb, null, 4), (err) => {
      if (err) throw err;
    });

    return parsedDb;
  }
}

export default new FileService();
