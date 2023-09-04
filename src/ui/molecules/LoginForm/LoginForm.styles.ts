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


export const testdiv = cx(
    css`
        
        & span {

        }
    `
);

export const form_input = cx(
    css`
        width: 100%;
        height: 56px;
        padding: 0px 12px;
        font-weight: 500;
        font-size: 16px;
        line-height: 21.86px;
        border: 1px solid var(--gray-one);
        border-radius: 4px;
        color: var(--gray-one);
        font-family: var(--principal-font);
        &::placeholder {
            color: var(--gray-one);
            font-weight: 500;
            font-size: 16px;
            line-height: 21.86px;
            font-family: var(--principal-font);
        }

    `
);