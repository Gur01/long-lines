const generateRandomContent = (content: string, contentLength: number) =>
    [...Array(contentLength)].map(() => content);

const randomInteger = (min: number, max: number) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

export const generateRandomString = (
    content: string,
    contentLength: number,
) => {
    const contentArray = generateRandomContent(content, contentLength).splice(
        0,
        randomInteger(1, contentLength),
    );

    return contentArray.join(' ');
};
