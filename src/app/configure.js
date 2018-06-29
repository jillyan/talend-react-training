import cmf from '@talend/react-cmf';
import {registerAllContainers} from '@talend/react-containers/lib/register';
import redirect from './actions/redirect';
import {fetchDataSets} from './actions/dataset';
import {fetchDataStores} from './actions/datastore';
import { fetchServicelocators } from './actions/servicelocator';
import App from './components/App';

const registerComponent = cmf.component.register;
const registerActionCreator = cmf.actionCreator.register;

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
        registerActionCreator('servicelocator:fetchAll', fetchServicelocators);
        registerActionCreator('redirect', redirect);
    },
};
