import * as yup from "yup";

export const languages = [
  { id: "UA", name: "Українська" },
  { id: "EN", name: "English" },
];

export const currencies = [{ id: "UAH", name: "UAH" }];

export const defaultValues = {
  name: "",
  domain: "",
  language: languages[0].id,
  currency: "UAH",
  logo: null as unknown as File | null,
};

export const fields: {
  [K in keyof typeof defaultValues]: keyof typeof defaultValues;
} = {
  name: "name",
  domain: "domain",
  language: "language",
  currency: "currency",
  logo: "logo",
};

export type FieldType = typeof defaultValues;

export const validationSchema = yup.object({
  [fields.name]: yup
    .string()
    .required("Поле обязательно для заполнения")
    .typeError("Поле обязательно для заполнения"),
  [fields.domain]: yup
    .string()
    .required("Поле обязательно для заполнения")
    .typeError("Поле обязательно для заполнения"),
  [fields.language]: yup
    .string()
    .required("Поле обязательно для заполнения")
    .typeError("Поле обязательно для заполнения"),
  [fields.currency]: yup
    .string()
    .required("Поле обязательно для заполнения")
    .typeError("Поле обязательно для заполнения"),
  [fields.logo]: yup
    .mixed()
    .required("Поле обязательно для заполнения")
    .typeError("Поле обязательно для заполнения"),
});
