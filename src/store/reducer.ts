import * as actionTypes from "./actionTypes"

 const initialState: ContactState = {
  contacts: [],
  authed: true
};

const reducer = (
    state: ContactState = initialState,
    action: ContactAction
  ): ContactState => {
    
    switch (action.type) {
      case actionTypes.ADD_CONTACT:
        const newContact: IContact = {
          id: state.contacts.length,
          name: action.contacts.name,
          lastName: action.contacts.lastName,
          date: action.contacts.date,
          email: action.contacts.email,
          favorite: action.contacts.favorite,
          contact: action.contacts.contact
        }
        return {
          ...state,
          contacts: state.contacts.concat(newContact),
        }
      case actionTypes.REMOVE_CONTACT:
        const updatedContacts: IContact[] = state.contacts.filter(
          contacts => contacts.id !== action.contacts.id
        )
        return {
          ...state,
          contacts: updatedContacts,
        }
        case actionTypes.GET_CONTACT_BY_ID:
          const findContact: any = state.contacts.filter(
            contacts => contacts.id === action.contacts
          )
          return {
            ...state,
            contacts: findContact,
          }
          case actionTypes.EDIT_CONTACT:
             const editContact: IContact[] = state.contacts.map((contact) => {
              if(contact.id === action.contacts.id)
                contact = action.contacts
                return contact;
              })
          return {...state,
          contacts: editContact}
          case actionTypes.UPLOAD_CONTACTS:
            const fetchContacts: any = action.contacts
            return {
              ...state,
              contacts: fetchContacts,
            }
            case actionTypes.CHANGE_AUTH:
            const changeAuth: any = action.contacts
            return {
              ...state,
              authed: changeAuth,
            }
    }
    return state
  }
  
  export default reducer