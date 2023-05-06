import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import Spinner from 'react-bootstrap/Spinner';
import AnimateComponents from "../components/AnimateComponents";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  // Please update the Access Key in the .env
  const apiKey = "bf129f37-dfbd-4ceb-a41f-2bc2f277c975";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Portfolio Form",
      subject: "New Contact Message from your Portfolio",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <AnimateComponents>
      <div className="text-light main-contact mt-5">
        <h1 className="mb-4">¡Contactame!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}></input>

          <div className="mb-3">
            <label htmlFor="email_address" className="mb-1 form-label text-light">
              Nombre completo
            </label>
            <input
              type="text"
              placeholder="Nombre completo"
              autoComplete="false"
              className={`form-control ${errors.name
                ? "border border-2 border-danger"
                : "border"
                }`}
              {...register("name", {
                required: "Ingresa tu nombre completo",
                maxLength: 80,
              })}
            />
            {errors.name && (
              <div className="mt-1 text-danger">
                <small>{errors.name.message}</small>
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email_address" className="mb-1 form-label text-light">
              Correo Electronico
            </label>
            <input
              id="email_address"
              type="email"
              placeholder="Correo Electronico"
              name="email"
              autoComplete="false"
              className={`form-control ${errors.email
                ? "border border-2 border-danger"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
              {...register("email", {
                required: "Ingresa tu correo electronico",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Ingresa un correo electronico válido",
                },
              })}
            />
            {errors.email && (
              <div className="mt-1 text-danger">
                <small>{errors.email.message}</small>
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email_address" className="mb-1 form-label text-light">
              Comentarios
            </label>
            <textarea
              name="message"
              placeholder="Mensaje"
              className={`form-control ${errors.message
                ? "border border-2 border-danger"
                : "border"
                }`}
              {...register("message", {
                required: "Ingresa un comentario",
              })}
            />
            {errors.message && (
              <div className="mt-1 text-danger">
                {" "}
                <small>{errors.message.message}</small>
              </div>
            )}
          </div>

          <button
            type="submit"
            className={isSubmitting ? "btn btn-light" : "btn btn-outline-light"}>
            {isSubmitting ? (
              <Spinner className="mt-1" animation="border" variant="dark" />
            ) : (
              "Enviar Mensaje"
            )}
          </button>
        </form>

        {isSubmitSuccessful && isSuccess && (
          <div className="mt-3 text-sm text-center text-green-500">
            {"Mensaje enviado correctamente"}
          </div>
        )}
        {isSubmitSuccessful && !isSuccess && (
          <div className="mt-3 text-sm text-center text-red-500">
            {"Algo ha fallado, intenta mas tarde"}
          </div>
        )}
      </div>
    </AnimateComponents>
  );
}