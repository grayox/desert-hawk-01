// source: https://github.com/iamshaunjp/React-Redux-Firebase-App/blob/lesson-18/marioplan/src/store/actions/projectActions.js
export const createProject = project => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then( () => {
      dispatch({ type: 'CREATE_LEAD_SUCCESS' });
    }).catch( error => {
      dispatch({ type: 'CREATE_LEAD_ERROR' }, error);
    });
  }
};