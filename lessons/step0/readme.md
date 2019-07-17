# React JS Review
it is class which you could simply understand it with your java basement.

## Class
A class is a page view/component. it can be a whole page, or just a part of the page. In the React class, you define constructor and status handling functions(componentWillMount/componentDidMount/componentWillUpdate/componentDidUpdate/componentWillUnmount...).

## Props and state
Props and state would both trigger the view changement.
But Props is not change-able, while state is change-able.
It is always recommended to transfer props from parent to child for view change.
State is change-able via the User reaction(click,input events...). We call this.setState to change it, and usually we don't need callback functions, and React would update the view automatically.
And it is always recommended to write state-less component.(Talend common components are state-less.)

## Redux
Redux manage React props and state with map reduce.
A UI event(click,input...) will send an action, which will be mapped to a reducer. The reducer creates a new state, then the new state is sent back to UI as props. This is how UI is changed.

### Steps detail:
1. Components are given callback functions which are called when a UI event happens.
2. Those callbacks create and dispatch actions based on the event.
3. Reducers receive the actions, and create new state according to business logic. The new state of the whole application goes into a single store.
4. Components receive the new state as props and re-render themselves where needed.
