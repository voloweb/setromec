import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import Button from '../button';

type Inputs = {
  setor: string;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

const FormContato = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID || '',
        process.env.REACT_APP_TEMPLATE_ID || '',
        data,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(() => {
        toast.success('E-mail enviado com sucesso!', {
          position: 'bottom-center',
          hideProgressBar: true,
          draggable: true,
          theme: 'colored',
        });
        reset();
      })
      .catch(() => {
        toast.error('Ops, algo de errado aconteceu!', {
          position: 'bottom-center',
          hideProgressBar: true,
          draggable: true,
          theme: 'colored',
        });
      })
      .finally(() => {
        setLoading(false);
      });
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
        disabled={loading}
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
