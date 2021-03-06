import connection from "./connection.js";
import users from "./users.js";
import subscribers from "./subscribers.js";
import deliverInfos from "./deliverInfos.js";
import deliveries from "./deliveries.js";

export default function makeDbFactory() {
  function endConnection() {
    connection.end();
  }

  async function clear(tables) {
    let query = "";
    tables.forEach((table) => {
      query += `
                DELETE FROM ${table};
            `;
    });

    await connection.query(query);
  }

  return {
    endConnection,
    clear,
    users,
    subscribers,
    deliverInfos,
    deliveries,
  };
}
