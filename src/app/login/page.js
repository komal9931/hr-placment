import Login from "@/components/Login";

export default function LoginPage() {
  return (
    <Login
      message="Welcome to the Felix-ITs CRM Portal"
      callbackUrl="/verification"
      optionalLink="/student/login"
      optionalLinkMessage="Sign In as Student"
    />
  );
}
