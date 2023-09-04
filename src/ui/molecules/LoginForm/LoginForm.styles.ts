import { css, cx } from '@emotion/css';
import { flex } from "@mixins";

export const container = cx(
    flex({justify: "", gap: "48px"}),
    css`
        width: 100%;
        flex-direction: column;
    `
);

export const logo = cx(
    css`
        font-weight: 700;
        font-size: 72px;
        line-height: 98.35px;
        letter-spacing: 8px;
        text-align: center;
        color: var(--blue-one);
    `
);

export const form = cx(
    flex({justify: "center", align: "center", gap: "32px"}),
    css`
        width: 100%;
        flex-direction: column;
    `
);
export const form_title = cx(
    css`
        font-weight: 700;
        font-size: 32px;
        line-height: 43.71px;
        text-align: center;
        color: var(--blue-one);
    `
);

export const text_forgot_pass = cx(
    css`
        width: 100%;
        font-family: var(--principal-font);
        color: var(--blue-one);
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-align: left;
        cursor: pointer;
    `
);

export const rememberme_container = cx(
    flex({justify: "space-between"}),
    css`
        width: 100%;
    `
);


export const button = cx(
    flex({justify: "space-between"}),
    css`
        width: 100%;
    `
);