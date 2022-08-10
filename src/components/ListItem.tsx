import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { CONTENT, CONTENT_LENGTH, SCREEN_OFFSET } from '../constants';
import { generateRandomString } from '../utils';

interface Props {
    currentPosition: number;
    screenHeight: number;
    maxScroll: number;
    index?: number;
}

export const ListItem: FC<Props> = ({
    currentPosition,
    screenHeight,
    maxScroll,
}) => {
    const [position, setPosition] = useState(0);

    const liRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const offsetTop = liRef.current?.getBoundingClientRect().top;

        if (!offsetTop) return;

        setPosition(offsetTop);
    }, [liRef]);

    const content = useMemo(
        () => generateRandomString(CONTENT, CONTENT_LENGTH),
        [],
    );

    const isVisible =
        position <= currentPosition + screenHeight * SCREEN_OFFSET ||
        position <= maxScroll + screenHeight * SCREEN_OFFSET;

    return isVisible ? <li ref={liRef}>{content}</li> : null;
};
