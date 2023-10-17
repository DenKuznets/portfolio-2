import Link from "next/link";

const urlRegex = /https?:\/\/(.\.?)+\..+/;

const replaceURL = (str: string ) => {
    const texts = str.split(" ").reduce(
        (acc, text) => {
            if (urlRegex.test(text)) {
                acc.array.push(acc.text);
                acc.urls.push(text);
                acc.text = "";

                return acc;
            }

            acc.text += ` ${text} `;

            return acc;
        },
        { array: [] as string[], urls: [] as string[], text: "" }
    );

    if (texts.text) texts.array.push(texts.text);

    interface duplicateLinksCountTypes {
        [key: string]: number;
    }

    const duplicateLinksCount: duplicateLinksCountTypes = {};

    const links = texts.urls.map((url) => {
        if (!duplicateLinksCount[url]) duplicateLinksCount[url] = 0;

        duplicateLinksCount[url] += 1;

        const key = `${duplicateLinksCount[url]}_${url}`;

        return (
            <Link target="_blank" href={url} key={key}>
                {url}
            </Link>
        );
    });

    const merged = [];

    for (let i = 0; i < texts.array.length; i += 1) {
        merged.push(texts.array[i]);
        if (links[i]) merged.push(links[i]);
    }

    return merged;
};

export default replaceURL