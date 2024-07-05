const { z } = require("zod");

const signupSchema = z.object({
  name: z
    .string({ required_error: "Name Is Required" })
    .trim()
    .min(3, { message: "Name Must Be At Least Of 3 Chars" }),
  email: z
    .string({ required_error: "Email Is Required" })
    .email({ message: "Invalid Email" }),
  password: z
    .string({ required_error: "Password Is Required" })
    .trim()
    .min(6, { message: "Password Must Be At Least Of 6 Chars" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email Is Required" })
    .email({ message: "Invalid Email" }),
  password: z
    .string({ required_error: "Password Is Required" })
    .trim()
    .min(6, { message: "Invalid Password" }),
});

module.exports = { signupSchema, loginSchema };
