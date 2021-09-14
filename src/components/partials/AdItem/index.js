import React from 'react';
import { Item } from './styled';
import {Link} from 'react-router-dom';

export default (props)=>{
    let price = '';
    if(props.data.priceNegotiable){
        price = 'Preço Negociavel'
    } else {
        price = `R$ ${props.data.price.toFixed(2)}`;
    }

    
    const handleClick = ()=> {
        if(props.others === true ){
            window.location.href = `/ad/${props.data.id}`;
        }
    }

    return(
        <Item className="itemAd">
            <Link to={`/ad/${props.data.id}`} onClick={handleClick}>
                <div className="itemImage">
                    <img src={props.data.image} alt="" />
                </div>
                <div className="itemName">{props.data.title}</div>
                <div className="itemPrice">{price}</div>
            </Link>
        </Item>
    );
}