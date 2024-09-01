'use client'

import { useTranslations } from 'next-intl';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import { Asterisk } from "lucide-react";


const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Email is not valid"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    phone: z.string().length(10, "Phone number must be 10 digits"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormFields = z.infer<typeof schema>

export const ContactForm = ({ className = "" }) => {
    const t = useTranslations('contactForm')
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormFields>({ resolver: zodResolver(schema), context: { t } });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    senderName: data.name,
                    senderEmail: data.email,
                    senderSubject: data.subject,
                    senderPhone: data.phone,
                    senderMessage: data.message,
                }),
            });

            if (response.ok) {
                toast.success('Message sent successfully');
                reset();
            } else {
                const errorData = await response.json();
                toast.error(errorData.error || 'Failed to send email');
            }

        } catch (error) {
            toast.error('An error occurred while submitting the form');
            console.error(error);
        }
    }

    return (
        <section className={`flex flex-col h-fit gap-[40px] sm:gap-[70px] bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[25px] py-[60px] sm:px-[40px] sm:py-[60px] overflow-hidden ${className}`}>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-orangePrimary text-2xl md:text-3xl font-semibold mb-3">{t('title')}</h2>
                <p className="text-gray text-sm md:text-base mb-3 text-textGray">{t('text')}</p>
                <div className="h-[1px] w-full bg-textGray mb-5"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div className="flex flex-col">
                        <div className="flex ">
                            <label className="mb-[6px]">{t('form.name')}</label>
                            <Asterisk className="text-orangePrimary ml-[2px]" size={14} />
                        </div>
                        <input {...register('name')} className="bg-pageBG border-none rounded-md px-4 py-2 text-textGray" type="text" placeholder={t('form.name')} />
                        {errors.name && <span className="text-error text-sm">{errors.name.message}</span>}
                    </div>
                    <div className="flex flex-col">
                        <div className="flex ">
                            <label className="mb-[6px]">{t('form.email')}</label>
                            <Asterisk className="text-orangePrimary ml-[2px]" size={14} />
                        </div>
                        <input {...register('email')} className="bg-pageBG border-none rounded-md px-4 py-2 text-textGray" type="email" placeholder={t('form.email')} />
                        {errors.email && <span className="text-error text-sm">{errors.email.message}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div className="flex flex-col">
                        <div className="flex ">
                            <label className="mb-[6px]">{t('form.subject')}</label>
                            <Asterisk className="text-orangePrimary ml-[2px]" size={14} />
                        </div>
                        <input {...register('subject')} className="bg-pageBG border-none rounded-md px-4 py-2 text-textGray" type="text" placeholder={t('form.subject')} />
                        {errors.subject && <span className="text-error text-sm">{errors.subject.message}</span>}
                    </div>
                    <div className="flex flex-col">
                        <div className="flex ">
                            <label className="mb-[6px]">{t('form.phone')}</label>
                            <Asterisk className="text-orangePrimary ml-[2px]" size={14} />
                        </div>
                        <input {...register('phone')} className="bg-pageBG border-none rounded-md px-4 py-2 text-textGray" type="text" placeholder={t('form.phone')} />
                        {errors.phone && <span className="text-error text-sm">{errors.phone.message}</span>}
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <div className="flex ">
                        <label className="mb-[6px]">{t('form.message')}</label>
                        <Asterisk className="text-orangePrimary ml-[2px]" size={14} />
                    </div>
                    <textarea {...register('message')} className="bg-pageBG border-none rounded-md px-4 py-2 text-textGray" rows={5} placeholder={t('form.message')}></textarea>
                    {errors.message && <span className="text-error text-sm">{errors.message.message}</span>}
                </div>

                <button type="submit" disabled={isSubmitting} className="bg-orangePrimary hover:bg-orangePrimaryHover border-[1px] shadow-lg shadow-orangePrimary/25 border-contactBtnBG text-white font-bold py-2 px-4 rounded-[7px] flex items-center w-fit min-w-fit">{isSubmitting ? t('form.sending') : t('form.submit')}</button>

            </form>

        </section>
    )
}