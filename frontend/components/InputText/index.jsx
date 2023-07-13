import { Input, ErrorInput } from "./style.js";
import React from "react";
import { Controller } from "react-hook-form";

export default function InputText({
  placeholderText,
  secureTextEntryText,
  keyboardTypeText,
  multilineText,
  control,
  name,
  error,
  ...rest
}) {
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder={placeholderText}
            secureTextEntry={secureTextEntryText}
            keyboardType={keyboardTypeText}
            multiline={multilineText}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {!!error && <ErrorInput>{error.message}</ErrorInput>}
    </>
  );
}
