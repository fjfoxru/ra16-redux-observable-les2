import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, retry, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { SERVICE_ITEM_REQUEST, SERVICES_REQUEST } from '../actions/actionTypes';
import { serviceItemSuccess, serviceItemFailure, servicesSuccess, servicesFailure } from '../actions/actionCreators';
import { of } from 'rxjs';

export const serviceItemEpic = action$ => action$.pipe(
    ofType(SERVICE_ITEM_REQUEST),
    map(o => o.payload.id),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SERVICES_URL}/${o}`).pipe(
        retry(3),
        debounceTime(100),
        map(o => serviceItemSuccess(o)),
        catchError(e => of(serviceItemFailure(e))),
    )),
);

export const servicesEpic = action$ => action$.pipe(
    ofType(SERVICES_REQUEST),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SERVICES_URL}`).pipe(
        retry(3),
        debounceTime(100),
        map(o => servicesSuccess(o)),
        catchError(e => of(servicesFailure(e))),
    )),
);