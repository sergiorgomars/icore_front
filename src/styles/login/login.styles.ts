import { css, cx } from '@emotion/css';
import { flex } from "@mixins";
export const container = cx(
    flex({justify: "space-between"}),
    css`
        width: 100%;
        height: 100vh;
    `
);
export const left_section = cx(
    flex({justify: "space-between"}),
    css`
        width: 496px;
        height: 100vh;
        padding: 0px 48px;
    `
);
export const right_section = (imageUrl: string) => cx(
    css`
        width: 70%;
        height: 100vh;
        background-image: url(${imageUrl});
        background-repeat: no-repeat;
        background-size: cover;
    `
);