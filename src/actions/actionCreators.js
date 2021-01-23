import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_FAILURE,
  SEARCH_SKILLS_SUCCESS,
  SERVICES_REQUEST,
  SERVICES_FAILURE,
  SERVICES_SUCCESS,
  SERVICE_ITEM_REQUEST,
  SERVICE_ITEM_FAILURE,
  SERVICE_ITEM_SUCCESS,
} from './actionTypes';




export const serviceItemRequest = id => ({
  type: SERVICE_ITEM_REQUEST,
  payload: {id},
});

export const serviceItemFailure = errorItem => ({
  type: SERVICE_ITEM_FAILURE,
  payload: {errorItem},
});

export const serviceItemSuccess = item => ({
  type: SERVICE_ITEM_SUCCESS,
  payload: {item},
});



export const servicesRequest = () => ({
  type: SERVICES_REQUEST,
});

export const servicesFailure = error => ({
  type: SERVICES_FAILURE,
  payload: {error},
});

export const servicesSuccess = items => ({
  type: SERVICES_SUCCESS,
  payload: {items},
});





export const searchSkillsRequest = search => ({
  type: SEARCH_SKILLS_REQUEST,
  payload: {search},
});

export const searchSkillsFailure = error => ({
  type: SEARCH_SKILLS_FAILURE,
  payload: {error},
});

export const searchSkillsSuccess = items => ({
  type: SEARCH_SKILLS_SUCCESS,
  payload: {items},
});

export const changeSearchField = search => ({
  type: CHANGE_SEARCH_FIELD,
  payload: {search},
});