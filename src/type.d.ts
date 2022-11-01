interface IBtnProps {
  text: string;
  action: () => void;
  type?: any;
  disabled?: boolean;
}

interface IDropDownProps {
  placeholder: string;
  options: Options[];
  setRecordsPerPage: (options: any) => void;
}

interface IIconProps {
  active: any;
}

interface IOpenProps {
  heading: boolean;
}

interface IPaginationProps {
  data: Items[];
  setCurrentRecords: (options: any) => void;
}

interface IFieldProps {
  fieldName: string;
  errors: any;
  label: string;
  type: string;
  options?: Options[];
}

interface IContact {
    id: number;
    name: string;
    lastName: string;
    date: string;
    email: string;
    favorite: boolean;
    contact: string;
  }
  
  type ContactState = {
    contacts: IContact[]
    authed: boolean
  }

  type DetaljiProps = {
    contact: any;
    removeContact: (contacts: IContact) => void;
  };

  type GetterState = {
    ids: number
  }
  
  type ContactAction = {
    type: string
    contacts: any
  }

  type AdresarProps = {
    contacts: any;
    editFavs: (contacts: IContact) => void;
    fetchAll: (contacts: IContact) => any;
  };

  type KontaktProps = {
    saveContact: (contacts: IContact | any) => void;
    editContact: (contacts: IContact) => void;
  };
  
  
  type DispatchType = (args: ContactAction) => ContactAction