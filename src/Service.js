import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { serviceItemRequest } from './actions/actionCreators';
import { Link } from 'react-router-dom';

export default function ServiceItem({ match }) {
    const { item, loading, errorItem } = useSelector(state => state.services);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(serviceItemRequest(match.params.id));
    }, []);

    const handleRepeatRequest = (evt) => {
        evt.preventDefault();
        dispatch(serviceItemRequest(match.params.id)); 
    }

    return (
        <Fragment>
            <Link to={`/`}>К списку</Link>
            {loading && <div>Загрузка...</div>}
            {errorItem && <div><span>Ошибка...</span><button onClick={handleRepeatRequest}>Повторить запрос</button></div>}
            {!loading && item && <div><div>id: {item.id}</div><div>Название: {item.name}</div> <div>Цена: {item.price}</div><div>Описание: {item.content}</div></div> }
        </Fragment>
    )
}
