import z from "zod";

const envVariables = z.object({
  CONEXION_STRING: z.url().trim(),
  PORT: z.string().min(4).max(7),
});

const { success, data, error } = envVariables.safeParse(process.env);

if (!success) {
  console.log(error);
  throw new Error("Missing enviroment variables");
}

export const { CONEXION_STRING, PORT } = data;
