import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Tailwind,
    Hr,
} from "@react-email/components";
import * as React from "react";

interface newMessageProps {
    senderName: string;
    senderEmail: string;
    senderMessage: string;
    senderPhone: string;
    senderSubject: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const newMessage = ({
    senderName,
    senderEmail,
    senderMessage,
    senderPhone,
    senderSubject,
}: newMessageProps) => {
    const previewText = `${senderName} te envió un mensaje`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans px-2">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        {/* Logo de la empresa */}
                        {/* <Section className="text-center mt-[32px]">
                            <Img
                                src={`${baseUrl}/assets/Logo.png`}
                                alt="Company Logo"
                                width="50"
                                height="50"
                            />
                        </Section> */}
                        <Section className="mt-[32px]">
                            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                                <strong>{senderName}</strong> te ha enviado un mensaje
                            </Heading>
                        </Section>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Hola Carlos,
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>{senderName}</strong> ({senderEmail}) te ha enviado un mensaje respecto al tema: <strong>{senderSubject}</strong>:
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            {senderMessage}
                        </Text>
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                                href={`mailto:${senderEmail}`}
                            >
                                Comunícate con {senderName}
                            </Button>
                        </Section>
                        <Text className="text-black text-[14px] leading-[24px] text-center">
                            o manda un mensaje a través de su número de teléfono:
                        </Text>
                        <Text className="text-[#0000EE] text-[14px] leading-[24px] text-center">
                            {senderPhone}
                        </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        {/* Pie de página actualizado */}
                        <Text className="text-[#666666] text-[12px] leading-[24px] mt-[32px]">
                            Este mensaje iba dirigido a Carlos Gallaga.Si no esperabas este mensaje, puede ignorar este mensaje.
                            <strong>Este correo electrónico es un mensaje automático, no respondas</strong>.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default newMessage;