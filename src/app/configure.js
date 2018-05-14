import { api } from '@talend/react-cmf';
import { registerAllContainers } from '@talend/react-containers/lib/register';
import redirect from './actions/redirect';
import { fetchDataSets } from './actions/dataset';
import { fetchDataStores } from './actions/datastore';
import { fetchSevivelocators,
	refrshServiceLocators,
	getServiceLocatorStatusIcon
} from './actions/servicelocator';

import App from './components/App';

const registerComponent = api.component.register;
const registerActionCreator = api.actionCreator.register;

export default {
	initialize() {
		/**
		 * Register components in CMF Components dictionary
		 */
		registerAllContainers();
		registerComponent('App', App);

		/**
		 * Register action creators in CMF Actions dictionary
		 */
		registerActionCreator('dataset:fetchAll', fetchDataSets);
		registerActionCreator('datastore:fetchAll', fetchDataStores);
		registerActionCreator('servicelocator:fetchAll', fetchSevivelocators);
		registerActionCreator('servicelocator:refresh', refrshServiceLocators);
		registerActionCreator('redirect', redirect);
	},
};
