import * as yup from "yup";

export const defaultValues = {
  phone: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
};

export const fields: {
  [K in keyof typeof defaultValues]: keyof typeof defaultValues;
} = {
  phone: "phone",
  email: "email",
  password: "password",
  firstName: "firstName",
  lastName: "lastName",
};

export type FieldType = typeof defaultValues;

export const validationSchema = yup.object({
  [fields.phone]: yup
    .string()
    .optional()
    .nullable()
    .typeError("Обязательное поле"),
  [fields.email]: yup
    .string()
    .email()
    .optional()
    .nullable()
    .typeError("Обязательное поле"),
  [fields.password]: yup
    .string()
    .optional()
    .nullable()
    .typeError("Обязательное поле"),
  [fields.firstName]: yup
    .string()
    .optional()
    .nullable()
    .typeError("Обязательное поле"),
  [fields.lastName]: yup
    .string()
    .optional()
    .nullable()
    .typeError("Обязательное поле"),
});
