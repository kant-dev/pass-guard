export function generatePassword(
  length: number,
  useUppercase: boolean,
  useLowercase: boolean,
  useNumbers: boolean,
  useSymbols: boolean,
): string {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
  const numberChars = "0123456789"
  const symbolChars = "!@#$%^&*()_+-";

  let chars = ""
  if (useUppercase) chars += uppercaseChars
  if (useLowercase) chars += lowercaseChars
  if (useNumbers) chars += numberChars
  if (useSymbols) chars += symbolChars

  if (chars === "") return ""

  let password = ""
  
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return password
}

