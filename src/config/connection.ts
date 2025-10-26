import { connect } from "mongoose";
import { CONEXION_STRING } from "./env";

export const connectionDB = async (): Promise<void> => {
  try {
    await connect(CONEXION_STRING);
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
  }
};
