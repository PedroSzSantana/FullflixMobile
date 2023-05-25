export const CaseErrors = (error) => {
  switch (error) {
    case "Firebase: Error (auth/invalid-email).":
      return "Email inválido.";
    case "Firebase: Error (auth/user-not-found).":
      return "Usuário não encontrado.";
    case "Firebase: Error (auth/missing-password).":
      return "Senha inválida.";
    case "Firebase: Password should be at least 6 characters (auth/weak-password).":
      return "A senha deve conter pelo menos 6 caracteres.";
    case "Firebase: Error (auth/email-already-in-use).":
      return "Email já está sendo utilizado.";
    case "Firebase: Error (auth/wrong-password).":
      return "Email ou senha inválidos.";
    default:
      return "Erro no servidor";
  }
};
