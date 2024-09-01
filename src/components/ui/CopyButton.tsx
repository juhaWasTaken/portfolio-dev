'use client'

import { CheckIcon, Copy } from "lucide-react";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { useTranslations } from "next-intl";

export function CopyButton() {
    const t = useTranslations('header');
    return (
        <AnimatedSubscribeButton
            buttonColor="#161616"
            buttonTextColor="#ffffff"
            subscribeStatus={false}
            initialText={
                <span className="group inline-flex items-center">
                    {t('buttons.copy')}{" "}
                    {/* <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> */}
                    <Copy className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
            }
            changeText={
                <span className="group inline-flex items-center text-white">
                    {t('buttons.copied')}{" "}
                    <CheckIcon className="ml-2 h-4 w-4" />
                </span>
            }
        />
    )
}