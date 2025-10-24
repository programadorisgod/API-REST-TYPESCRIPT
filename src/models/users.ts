import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    id: {
      type: Schema.Types.UUID,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    measueres: {
      AE: {
        type: Number,
        required: true,
      },
      TD: {
        type: Number,
        required: true,
      },
      TE: {
        type: Number,
        required: true,
      },
      CP: {
        type: Number,
        required: true,
      },
      ALB: {
        type: Number,
        required: true,
      },
      SB: {
        type: Number,
        required: true,
      },
      CC: {
        type: Number,
        required: true,
      },
      CK: {
        type: Number,
        required: true,
      },
      ALK: {
        type: Number,
        required: true,
      },
      LT: {
        type: Number,
        required: true,
      },
      LM: {
        type: Number,
        required: true,
      },
      LSH: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true, versionKey: false },
);

const User = model("User", userSchema);

export default User;
