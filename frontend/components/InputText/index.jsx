import { Input } from './style.js';

export default function InputText({
	placeholderText,
	secureTextEntryText,
	keyboardTypeText,
	multilineText,
}) {
	return (
		<Input
			placeholder={placeholderText}
			secureTextEntry={secureTextEntryText}
			keyboardType={keyboardTypeText}
			multiline={multilineText}
		/>
	);
}
