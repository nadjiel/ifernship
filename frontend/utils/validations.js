import * as yup from "yup";

export const schemaValidationLogin = yup.object().shape({
  email: yup
    .string()
    .email("email inválido")
    .required("Por favor, forneça um email!"),
  password: yup.string().required("Por favor, forneça uma senha!"),
});

export const schemaValidationRegister = yup.object({
  name: yup.string(),
  course: yup.string(),
  email: yup
    .string()
    .email("email inválido")
    .required("Por favor, forneça um email!"),
  password: yup.string().required("Por favor, forneça uma senha!"),
});

export const schemaValidationEnterprise = yup.object({
  name: yup.string().required("Por favor, forneça um nome!"),
  about: yup.string(),
  cnpj: yup.string().required("Por favor, forneça um CNPJ!"),
  email: yup
    .string()
    .email("email inválido")
    .required("Por favor, forneça um email!"),
  city: yup.string().required("Por favor, forneça uma cidade!"),
  latitude: yup.string().required("Por favor, forneça uma senha!"),
  longitude: yup.string().required("Por favor, forneça uma senha!"),
});

export const schemaValidationInternship = yup.object({
  profile: yup.string().required("Por favor, forneça um perfil!"),
  benefits: yup.string(),
  type: yup.string().required("Por favor, forneça um tipo de trabalho!"),
  course: yup.string().required("Por favor, forneça um curso!"),
  position: yup.string().required("Por favor, forneça um cargo!"),
  hoursWeek: yup
    .number()
    .required("Por favor, forneça uma carga horaria semanal!"),
  enterprise: yup.string().required("Por favor, forneça uma empresa!"),
});
