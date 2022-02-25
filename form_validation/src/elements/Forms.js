import styled from 'styled-components';

const colors = {
    border: "#0075FF",
    error: "#bb2929",
    success: "#1ed12d"
}


const Form = styled.form`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
padding: 4em;
background: papayawhip;

@media (max-width: 800px) {
    grid-template-columns: 1fr;
}
`;

export {Form};
