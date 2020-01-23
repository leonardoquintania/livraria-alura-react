import React from 'react';
import { NavLink } from 'react-router-dom';

//-- Conceito de envelopar uma propriedade para cada o React não de mais suporte, ficará mais facil de alterar
//-- High Order Components para deixarmos nosso código "livre" de funcionalidades de outros módulos
//-- https://pt-br.reactjs.org/docs/higher-order-components.html
const LinkWrapper = props => {
    return (
        <NavLink activeStyle={{ fontWeight: "bold" }}{...props} />
    );
}
export default LinkWrapper;