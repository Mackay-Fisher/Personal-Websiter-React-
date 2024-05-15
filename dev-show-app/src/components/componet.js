import {createGlobalState} from 'react-hooks-global-state';

const {setGlobalState, useGlobalState} = createGlobalState({
    work: false,
    name: '',
    email: '',
    message:'',
    skills: false,
});

export {useGlobalState,setGlobalState};
