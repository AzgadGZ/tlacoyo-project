import { openDB } from 'idb';

const dbName = 'PWA-TalentLand';
const dbVersion = 1;

const initDB = {
  async sync() {
    if (!('indexedDB' in window)) {
      throw Error('IndexedDB not supported');
    }
    await openDB(dbName, dbVersion, {
      upgrade(dbEntity) {
        try {
          // Crea un nuevo ObjectStore (Listas)
          const listas = dbEntity.createObjectStore('Listas', {
            keyPath: '_id',
          });

          // Crea un nuevo indice en la propirdad '_id' con el nombre 'ID'
          listas.createIndex('ID', '_id');

          // Crea un nuevo ObjectStore (Tareas)
          const tareas = dbEntity.createObjectStore('Tareas', {
            keyPath: '_id',
          });

          // Crea un nuevo indice en la propiedad '_id' con el nombre 'ID'
          tareas.createIndex('ID', '_id');
          // Crea un nuevo indice en la propirdad 'listId' con el nombre 'ListID'
          tareas.createIndex('ListID', 'listId');
        } catch (error) {
          console.log(`Error creacion de Schema: ${error}`);
        }
      },
    });
  },
  async addToDB(storeType, payload) {
    try {
      // Abre la base de datos
      const db = await openDB(dbName, dbVersion);

      /*
      // Inicializa una transaccion sobre el Store que trae como argumento
      // (storetype)
      */
      const transaction = db.transaction(storeType, 'readwrite');

      // Por cada fila recibida en el payload realiza la inserción con PUT
      payload.forEach((row) => {
        transaction.store.put(row);
      });

      // Espera a que la transaccion termine
      await transaction.done;
    } catch (error) {
      console.log(`Error agregando datos: ${error}`);
    }
  },

  async getFromDB(storeType) {
    try {
      const db = await openDB(dbName, dbVersion);
      const results = await db.getAllFromIndex(storeType, 'ID');
      return results;
    } catch (error) {
      console.log(`Error eliminando datos: ${error}`);
      return null;
    }
  },
  async deleteFromDB(storeType, payload) {
    try {
      const db = await openDB(dbName, dbVersion);
      const transaction = db.transaction(storeType, 'readwrite');
      payload.forEach((row) => {
        /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
        transaction.store.delete(row._id);
      });
      await transaction.done;
    } catch (error) {
      console.log(`Error eliminando datos: ${error}`);
    }
  },
};

export default initDB;
