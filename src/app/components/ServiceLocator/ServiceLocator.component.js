import React from 'react';
import { List } from '@talend/react-containers';

function ServiceLocator(props) {

    const servicelocatorProps = {
        "collectionId": "servicelocators",
        "list": {
            "columns": [
                { "key": "id", "label": "ID" },
                { "key": "status", "label": "Status" },
                { "key": "uptime", "label":"Uptime"},
                { "key": "endpoint",  "label": "Service Endpoint" },
                { "key": "namespace", "label": "Namespace" }
            ]
        },
        "toolbar": {
            "filter": {
                "placeholder": "Find a servicelocator"
            },
            "sort": {
                "options": [
                    { "id": "label", "name": "Name" },
                    { "id": "status", "name": "status" }
                ]
            },
            "pagination": {}
        },
        "actions" :{
            "left":["servicelocator:refresh"]
        },
        "initialState": {
            "sortOn": "status"
        }
    };

    return (<List id="ServiceLocator" {...servicelocatorProps}/>);
}

ServiceLocator.displayName="ServiceLocator";

export default ServiceLocator;
