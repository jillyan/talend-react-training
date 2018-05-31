import {actions} from '@talend/react-cmf';
import {GETTING_SERVICELOCATORS, ERROR_GETTING_SERVICELOCATORS} from '../constants/servicelocators';

export function fetchServicelocators(){
	return actions.http.get('/servicelocators.json', {
		// action type to dispatch before fetch
		onSend: GETTING_SERVICELOCATORS,
		// action type to dispatch on fetch error
		onError: ERROR_GETTING_SERVICELOCATORS,
		// CMF action config
		// collectionId is the key where the result will be stored in app state
		cmf: {
			collectionId: 'servicelocators',
		},
	});
}
