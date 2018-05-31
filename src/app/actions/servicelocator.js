import {actions} from '@talend/react-cmf';
import {
    GETTING_SERVICELOCATORS,
    ERROR_GETTING_SERVICELOCATORS,
    REFRSHING_SERVICELOCATORS,
    ERROR_REFRSHING_SERVICELOCATORS
} from '../constants/servicelocators';

export function fetchServicelocators() {
    return actions.http.get('/servicelocators.json', {
        // action type to dispatch before fetch
        onSend: GETTING_SERVICELOCATORS,
        // action type to dispatch on fetch error
        onError: ERROR_GETTING_SERVICELOCATORS,
        // CMF action config
        // collectionId is the key where the result will be stored in app state
        cmf: {
            collectionId: 'servicelocators'
        },
    });
}

export function refreshServicelocators() {
    return actions.http.get('/servicelocators.json', {
        // action type to dispatch before fetch
        onSend: REFRSHING_SERVICELOCATORS,
        // action type to dispatch on fetch error
        onError: ERROR_REFRSHING_SERVICELOCATORS,
        // CMF action config
        // collectionId is the key where the result will be stored in app state
        cmf: {
            collectionId: 'servicelocators'
        },
    });
}
