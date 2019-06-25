import styled from 'styled-components';
import * as v from './vars'

export const Navigate=styled.nav`
    span.menuHeader{
        display:inline-block;
        padding:1rem 0 1rem 1rem;
        border:2px groove ${props=>props.theme.accBorderColor};
        color:${props=>props.theme.pTextColor}
        img{
            position:absolute;
            left:10px;
            top:25px;
        }
        ${v.TABLET}{
            padding:1rem 0 1rem 2rem;
        }
    }
    .menu{
        transform:translatex(-101%);
        transition:transform .5s;
        position:absolute;
        left:0;
        background-color: ${props=>props.theme.bgAccent}
        
        section{
            box-sizing:border-box;
            padding:1rem;
            border:white 1px groove;
            margin: .25rem 0;
            color:white;
            text-decoration:none;
            cursor:pointer;
        }
        ${v.TABLET}{
            transform:translate(0);
            transition:0;
            position:static;
            width:250px;
            box-sizing:border-box;


            section{
                width:250px;
                box-sizing:border-box;
                border-color:transparent;
            }
        }
    }
    .show{
        transform:translate(0%);
    }
`