import { connect } from "mongoose";
import { config } from "dotenv";

config();

export const connectionDB = async (): Promise<void> => {
  try {
    const { stringConexion } = process.env;

    if (stringConexion) {
      await connect(stringConexion);
    }
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
  }
};
