import React from 'react';
import PropTypes from 'prop-types';
import {HomeListView as BareHomeListView} from '@talend/react-containers';
import {Inject} from '@talend/react-cmf';
import omit from 'lodash/omit';

function CHomeListView(props) {
    const listComponent = <Inject component={props.list.component}/>;
    return (
        <BareHomeListView
            {...omit(props, ['list'])}
            list={listComponent}
            hasTheme
        >
            {props.children}
        </BareHomeListView>
    );
}

CHomeListView.propTypes = {
    children: PropTypes.element,
    list: PropTypes.oneOfType([PropTypes.element, PropTypes.object]).isRequired
};

export default CHomeListView;
