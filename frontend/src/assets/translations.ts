export interface Translation {
  [name: string]: string;
}

const translations: Translation = {
  addEmployee: 'Add employee',
  cancel: 'Cancel',
  yes: 'Yes',
  no: 'No',
  discardChanges: 'Discard changes',
  addingEmployeeSuccess: 'New employee has been added successfully!',
  addingEmployeeFail: 'An error ocurred while trying to add a new employee.',
  cancelChangesQuestion:
    'Are you sure you want to cancel?, all changes will be discarded.',
  changesDiscarded: 'All changes were discarded.',
  changesSaved: 'All changes have been saved successfully!',
  editEmployee: 'Edit employee.',
  genericError: 'Oops!, something went wrong.',
  badRequestError: 'Oops!, something went wrong, please check your data.',
  serverError:
    'Oops!, something went wrong, we could not establish a connection to the server.',
};

export default translations;
