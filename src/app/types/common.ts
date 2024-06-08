export type Mode = "classic" | "picture";
export type UpdateMode = (mode: Mode) => void;
export type FormSubmitHandler = (value: string) => void;
