import { css, cx } from '@emotion/css'


type Flex = {
    justify: string;
    gap?: string;
    align?: string;
}

export const flex = ({ justify, gap, align = "center" }: Flex) => {
    const justifyContent = justify ? `justify-content: ${justify};` : "";
    const gapContent = gap ? `gap: ${gap};` : "";
    const alignContent = align ? `align-items: ${align};` : "";
  
    return css`
      display: flex;
      ${justifyContent}
      ${gapContent}
      ${alignContent}
    `;
  };