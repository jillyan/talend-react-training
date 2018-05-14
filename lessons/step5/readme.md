This step we will improve the service locator module.

# Improve view

We will add refresh button and pagination in the toolbar, we will improve the columns with image, and also add two tabs on the bottom.

## Add `refresh` button in toolbar
HomeListView uses [List container](https://github.com/Talend/ui/blob/master/packages/containers/src/List/List.container.js), according to the [List example](https://github.com/Talend/ui/blob/master/packages/containers/examples/ExampleList.js),
we define the refresh functionin app/actions/servicelocat.js
```
export function refrshServiceLocators(){
	return fetchSevivelocators();
}
```

register it in cmf, see app/configure.js
```
registerActionCreator('servicelocator:refresh', refrshServiceLocators);
```

define action `servicelocator:refresh` in settings.json
```
"servicelocator:refresh": {
    "id": "servicelocator:refresh",
    "label": "Refresh",
    "bsStyle": "primary",
    "icon": "talend-refresh",
    "actionCreator": "servicelocator:refresh"
}
```
P.S. We use icon talend-refresh for refresh button. Please see all talend icons in http://talend.surge.sh/icons/.

add action in service locator list container in settings.json
```
"actions": {
  "left": ["servicelocator:refresh"]
},
```

## Add pagination in toolbar
`"pagination":{}` will use default configuations in [Pagination component](https://github.com/Talend/ui/blob/master/packages/components/src/List/Toolbar/Pagination/Pagination.component.js).

```
Pagination.defaultProps = {
	itemsPerPage: 5,
	startIndex: 1,
	itemsPerPageOptions: [5, 10, 20, 50],
};
```
So we added another 4 items in assets/servicelocator.json, so we have 6 items.

- We can access [talend common components online samples](http://talend.surge.sh/components), and also [talend form online sample](http://talend.surge.sh/forms).
- [Talend ui repository](https://github.com/Talend/ui) contains common comopnents, cmf, form and so on.