import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { servicesRequest } from './actions/actionCreators';
import { Link } from 'react-router-dom';

export default function Services() {
    const { items, loading, error } = useSelector(state => state.services);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(servicesRequest());
    }, []);

    const handleRepeatRequest = (evt) => {
        evt.preventDefault();
        dispatch(servicesRequest()); 
    }

    return (
        <Fragment>
            {loading && <div>Загрузка...</div>}
            {error && <div><span>Ошибка...</span><button onClick={handleRepeatRequest}>Повторить запрос</button></div>}
            {!error && !loading && <div>{items.map(o => <Link to={`/${o.id}`} key={o.id}>{o.name}</Link> )}</div>}
        </Fragment>
    )
}
