import { connect, connection } from "mongoose";
import { CONEXION_STRING } from "./env";

export const connectionDB = async (): Promise<void> => {
  try {
    await connect(CONEXION_STRING);
    console.log("DB is connected");

    // Sync indexes so the email sparse unique index matches the schema
    // (drops old non-sparse index if it exists, creates the new sparse one)
    await connection.syncIndexes();
    console.log("Indexes synced");
  } catch (error) {
    console.log(error);
  }
};
