# CSS in JS
## Огляд доступних пакетів [→](https://www.npmtrends.com/jss-vs-aphrodite-vs-radium-vs-styled-components-vs-glamorous-vs-emotion-vs-styletron-vs-glamor-vs-fela)
### `styled-components` [→](https://www.styled-components.com/)
1. Встановлення пакету
```
npm i --save styled-components
```
1. Стилізація компонента `Button` з меню
```
import styled from 'styled-components';
const StyledButton = styled.button`
…
`;
```
1. Розрахунок стилів з `props`
```
const StyledButton = styled.button`
  pointer-events: ${props => (props.disabled ? 'none' : 'all')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;
```
1. Стилізація компонента `Link` з меню
```
export const Link = ({ children, disabled, ...props }) => (
  <StyledButton as={RouterLink} {...props}>
    {children}
  </StyledButton>
);
```
1. Стилізація кореневого елемента меню
1. Приклад стилізації будь-якого компонента
1. Псевдоелементи, псевдокласи і вкладеність [→](https://www.styled-components.com/docs/basics#pseudoelements-pseudoselectors-and-nesting)
1. Анімація
