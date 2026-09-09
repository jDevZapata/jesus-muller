'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './Contact.module.css';

const schema = yup.object({
    name: yup.string()
        .required('El nombre es requerido')
        .min(5, 'El nombre debe tener al menos 5 caracteres')
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/, 'El nombre no puede contener números'),
    email: yup.string().email('Email no válido').required('El email es requerido'),
    message: yup.string().required('El mensaje es requerido').min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type FormData = yup.InferType<typeof schema>;

const ContactForm = () => {
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const showToast = (message: string, type: 'success' | 'error') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 5000);
    };

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Error al enviar el mensaje');
            }

            reset();
            showToast('¡Mensaje enviado correctamente!', 'success');
        } catch {
            showToast('Hubo un error al enviar el mensaje. Intenta nuevamente.', 'error');
        }
    };

    return (
        <>
            {toast && (
                <div className={`${styles.toast} ${styles[toast.type]}`}>
                    {toast.message}
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.field}>
                    <label htmlFor="name">Nombre</label>
                    <input
                        id="name"
                        type="text"
                        {...register('name')}
                        className={errors.name ? styles.inputError : ''}
                    />
                    {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                </div>

                <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className={errors.email ? styles.inputError : ''}
                    />
                    <span className={styles.helperText}>Tu email se usará únicamente para responderte</span>
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                </div>

                <div className={styles.field}>
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        {...register('message')}
                        className={errors.message ? styles.inputError : ''}
                        rows={5}
                    />
                    {errors.message && <span className={styles.error}>{errors.message.message}</span>}
                </div>

                <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
            </form>
        </>
    );
};

export default ContactForm;
