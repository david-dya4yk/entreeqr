import * as yup from "yup";

export const defaultValues = {
  email: "",
  password: "",
};

export const fields: {
  [K in keyof typeof defaultValues]: keyof typeof defaultValues;
} = {
  email: "email",
  password: "password",
};

export type FieldType = typeof defaultValues;

export const validationSchema = yup.object({
  [fields.email]: yup
    .string()
    .email()
    .required("Поле обязательно для заполнения")
    .typeError("Поле обязательно для заполнения"),
  [fields.password]: yup
    .string()
    .required("Поле обязательно для заполнения")
    .typeError("Поле обязательно для заполнения"),
});
