import * as yup from "yup";

export const schemaValidationLogin = yup.object({
	email: yup
		.string()
		.email("email inválido")
		.required("Por favor, forneça um email!"),
	password: yup
		.string()
		.min(5, "password menor que 5 caracteres")
		.max(10, "password maior que 10 caracteres")
		.required("Por favor, forneça uma senha!"),
});

export const schemaValidationRegister = yup.object({
	name: yup.string(),
	course: yup.string(),
	email: yup
		.string()
		.email("email inválido")
		.required("Por favor, forneça um email!"),
	password: yup
		.string()
		.min(5, "password menor que 5 caracteres")
		.max(10, "password maior que 10 caracteres")
		.required("Por favor, forneça uma senha!"),
		
export const schemaValidationInternship = yup.object({
  profile: yup
    .string()
    .required("Por favor, forneça um perfil!"),
  benefits: yup
    .string(),
  type: yup
    .string()
    .required("Por favor, forneça um tipo de trabalho!"),
  course: yup
    .string()
    .required("Por favor, forneça um curso!"),
  position: yup
    .string()
    .required("Por favor, forneça um cargo!"),
  hoursWeek: yup
    .number()
    .required("Por favor, forneça uma carga horaria semanal!"),
  enterprise: yup
    .string()
    .required("Por favor, forneça uma empresa!"),
});
});
