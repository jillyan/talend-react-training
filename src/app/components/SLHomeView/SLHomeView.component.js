import PropTypes from 'prop-types';
import React from 'react';
import {Inject, Layout, HeaderBar} from '@talend/react-components';
import {Inject as CMFInject, cmfConnect} from '@talend/react-cmf';
import {List, SidePanel, TabBar} from '@talend/react-containers';

function getContent(Component, props) {
    if (React.isValidElement(props)) {
        return props;
    }
    return <Component {...props} />;
}

function wrapChildren(children) {
    if (children && children.props && children.props.children) {
        return [children, ...wrapChildren(children.props.children)];
    } else if (children && !children.props) {
        // this happens ony in tests with enzyme's mount
        return [];
    }
    return [children];
}

function SLHomeView({getComponent, id, hasTheme, sidepanel, list, header, children, state}) {
    if (!sidepanel || !list) {
        return null;
    }
    let drawers = children || [];
    if (!Array.isArray(drawers)) {
        drawers = wrapChildren(drawers);
    }

    const Renderers = Inject.getAll(getComponent, {HeaderBar, SidePanel, List});
    const listComponent = <CMFInject component={list.component}></CMFInject>;
    const tabProps = {
        id: 'sltab',
        items: [
            {
                id: 'tab-bar-action-1',
                key: 'info',
                label: 'Info',
                'data-feature': 'action.1',
            },
            {
                id: 'tab-bar-action-2',
                key: 'metadata',
                label: 'Metadata',
                'data-feature': 'action.2',
            }
        ],
        selectedKey: 'info',
    };
    let currentTab = 'info';
    const tabBarState = TabBar.getState(state, 'sltab');
    if(tabBarState.size > 0){
        currentTab = tabBarState.get('selectedKey');
    }

    const tabDivHeight = "300px";
    return (
        <Layout
            id={id}
            hasTheme={hasTheme}
            mode="TwoColumns"
            header={getContent(Renderers.HeaderBar, header)}
            one={getContent(Renderers.SidePanel, sidepanel)}
            drawers={drawers}
        >
            {getContent(Renderers.List, listComponent)}
            <TabBar {...tabProps} />
            {currentTab === 'info' ? <div style={{height:tabDivHeight}}>This is info tab</div> :
                <div style={{height:tabDivHeight}}>This is metadata tab</div>}
        </Layout>
    );
}

SLHomeView.displayName = 'SLHomeView';
SLHomeView.propTypes = {
    getComponent: PropTypes.func,
    id: PropTypes.string,
    hasTheme: PropTypes.bool,
    header: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
    sidepanel: PropTypes.oneOfType([PropTypes.element, PropTypes.object]).isRequired,
    list: PropTypes.oneOfType([PropTypes.element, PropTypes.object]).isRequired,
    children: PropTypes.node,
};
const mapStateToProps = (state) => ({
    selectedKey: state.myExample.selectedKey,
    componentsState: state.cmf.components,
    state: state
});

export default cmfConnect({mapStateToProps})(SLHomeView);

