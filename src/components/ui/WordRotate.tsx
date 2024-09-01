'use client'

import WordRotate from "@/components/magicui/word-rotate";

export async function WordRotateFunction() {
    return (
        <WordRotate
            className="text-textGray text-[18px] sm:text-2xl"
            words={["Desarrollo web", "Diseño web", "Diseño UI/UX"]}
        />
    );
}
