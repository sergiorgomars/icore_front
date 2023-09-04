import { css, cx } from '@emotion/css';
import { flex } from "@mixins";


export const container = cx(
    css`
        width: 100%;
        position: relative;
    `
);

export const spanlabel = (isFocus: boolean) => cx(
    css`
        position: absolute;
        color: var(--black);
        background-color: var(--white);
        top: -7.5px;
        padding: 0px 4px;
        left: 12px;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 19px;
        opacity: ${isFocus ? '1' : '0'};
        transition: opacity 0.2s ease;
    `
);

export const input = cx(
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

export const icon = cx(
    css`
        position: absolute;
        right: 12px;
        top: calc(50% - 12px);
        cursor: pointer;
        &:hover {
            
        }
    `,
);