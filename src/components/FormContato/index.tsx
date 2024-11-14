import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../button';

type Inputs = {
  setor: string;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

const FormContato = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    setDisabled(true);
    try {
      // eslint-disable-next-line
      console.log('E-mail de contato enviado com sucesso!', data);
      reset();
    } catch (error) {
      // eslint-disable-next-line
      console.log('Ops, algo de errado aconteceu!', error);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setDisabled(false);
      }, 5000);
    }
  };

  return (
    <form
      className="contact-form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="input mb-4">
        <label htmlFor="setor" className="block required mb-1">
          Setor
        </label>
        <select
          id="setor"
          defaultValue=""
          required
          {...register('setor', { required: true })}
          className={`border rounded-lg w-full
          ${errors.setor ? 'border-red-600' : 'border-gray-300'}
          ${!watch('setor') && 'text-setromec-gray-1'}
        `}
        >
          <option value="" disabled hidden>
            Selecione
          </option>
          <option value="x">X</option>
          <option value="y">Y</option>
        </select>
      </div>

      <div className="grid gap-4 mb-4 md:grid-cols-1">
        <div className="input">
          <label htmlFor="nome" className="block required mb-1">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            {...register('nome', { required: true })}
            className={`border rounded-lg w-full ${errors.nome ? 'border-red-600' : 'border-gray-300'}`}
            placeholder="Digite aqui..."
          />
        </div>
      </div>

      <div className="grid gap-4 mb-4 md:grid-cols-2">
        <div className="input">
          <label htmlFor="email" className="block required mb-1">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '',
              },
            })}
            className={`border rounded-lg w-full ${errors.email ? 'border-red-600' : 'border-gray-300'}`}
            placeholder="Digite aqui..."
          />
        </div>
        <div className="input">
          <label htmlFor="telefone" className="block required mb-1">
            Telefone
          </label>
          <input
            type="text"
            id="telefone"
            {...register('telefone', { required: true })}
            className={`border rounded-lg w-full ${errors.telefone ? 'border-red-600' : 'border-gray-300'}`}
            placeholder="Digite aqui..."
          />
        </div>
      </div>

      <div className="input mb-2.5">
        <label htmlFor="mensagem" className="block required mb-1">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          {...register('mensagem', { required: true })}
          className={`border rounded-lg w-full ${errors.mensagem ? 'border-red-600' : 'border-gray-300'}`}
          placeholder="Digite aqui..."
        ></textarea>
      </div>

      <Button
        type="submit"
        disabled={disabled && isValid}
        loading={loading}
        className="w-full"
        aria-label="Enviar"
      >
        Enviar
      </Button>
    </form>
  );
};

export default FormContato;
