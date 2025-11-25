import mysql from "mysql2/promise";

export const db = mysql.createPool({
    host: "hopper.proxy.rlwy.net",
    port: 52619,
    user: "root",
    password: "EpHmEEPXRrxQBLMoPXvDuqNSlqBkDrQi",
    database: "railway",
});
