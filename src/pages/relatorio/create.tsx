import { useForm } from "react-hook-form";
import { ShieldExclamationIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router";
type Inputs = {
  valor: number;
  descricao: string;
};

export default function CreateRelatorio() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  
  return (
    <form
      className="px-4 py-8 sm:px-6 lg:px-8"
      onSubmit={handleSubmit((data) => console.log("valores:", data))}
    >
      <div className="space-y-12">
        <div className="border-b border-white-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-white-900">
            Cadastro - Transação
          </h2>
          <p className="mt-1 text-sm/6 text-white-600">
            Cadastro de uma nova transação para o relatório.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm/6 font-medium text-white-900 text-start">
                Valor
              </label>
              <div className="mt-2">
                <input
                  {...register("valor", { required: true })}
                  autoComplete="none"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-white-300 placeholder:text-white-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              {errors.valor && (
                <p className="mt-2 text-sm text-start text-white-600">
                  <div className="flex items-center gap-x-2">
                    {watch("valor").toString().length < 1 ? (
                      ""
                    ) : (
                      <ShieldExclamationIcon className="block size-6 group-data-open:hidden" />
                    )}
                    {errors.valor.message}
                  </div>
                </p>
              )}
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm/6 font-medium text-white-900 text-start">
                Descrição
              </label>
              <div className="mt-2">
                <input
                  {...register("descricao", {
                    required: true,
                    minLength: {
                      value: 10,
                      message: "Descrição deve ter pelo menos 10 caracteres",
                    },
                  })}
                  autoComplete="none"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-white-300 placeholder:text-white-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              {errors.descricao && (
                <p className="mt-2 text-sm text-start text-white-600">
                  <div className="flex items-center gap-x-2">
                    {watch("descricao").length < 1 ? (
                      ""
                    ) : (
                      <ShieldExclamationIcon className="block size-6 group-data-open:hidden" />
                    )}
                    {errors.descricao.message}
                  </div>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <NavLink to="/home" className="text-sm/6 font-semibold text-white-900 button">
          Cancelar
        </NavLink>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-md font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
