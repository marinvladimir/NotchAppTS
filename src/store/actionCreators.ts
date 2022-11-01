import * as actionTypes from "./actionTypes"

export function addContact(contacts: IContact) {
  const action: ContactAction = {
    type: actionTypes.ADD_CONTACT,
    contacts,
  }
  return (dispatch: DispatchType) => {
    dispatch(action)
}
}

export function removeContact(contacts: IContact) {
  const action: ContactAction = {
    type: actionTypes.REMOVE_CONTACT,
    contacts,
  }
  return (dispatch: DispatchType) => {
      dispatch(action)
  }
}

export function getContactById(contacts: IContact) {
  const action: ContactAction = {
    type: actionTypes.GET_CONTACT_BY_ID,
    contacts,
  }
  return (dispatch: DispatchType) => {
      dispatch(action)
  }
}

export function editContact(contacts: IContact) {
  const action: ContactAction = {
    type: actionTypes.EDIT_CONTACT,
    contacts,
  }
  return (dispatch: DispatchType) => {
      dispatch(action)
  }
}

export function fetchContacts(contacts:IContact) {
const action: ContactAction = {
  type: actionTypes.UPLOAD_CONTACTS,
  contacts,
}
return (dispatch: DispatchType) => {
    dispatch(action)
}
}

export function changeAuth(contacts:boolean){
  const action: ContactAction = {
    type: actionTypes.CHANGE_AUTH,
    contacts,
  }
  return (dispatch: DispatchType) => {
      dispatch(action)
  }
}