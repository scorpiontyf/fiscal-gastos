import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

type LoginData = {
  email: string;
  senha: string;
};

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const contaLogada = localStorage.getItem("conta");
  useEffect(() => {
    if (contaLogada) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white-900">
          Entre com sua conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-white-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                {...register("email")}
                type="email"
                required
                autoComplete="none"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-white-900 outline-1 -outline-offset-1 outline-white-300 placeholder:text-white-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-white-900"
              >
                Senha
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                {...register("senha")}
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-white-900 outline-1 -outline-offset-1 outline-white-300 placeholder:text-white-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={handleSubmit((data) => {
                console.log("Login data:", data);
                if (
                  data.email === "admin@admin.com" &&
                  data.senha === "admin"
                ) {
                  localStorage.setItem(
                    "conta",
                    JSON.stringify({ email: data.email, senha: data.senha })
                  );
                  navigate("/home");
                }
              })}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Entrar
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-white-500">
          Não possui conta registrada?{" "}
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Cadastrar-se
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
