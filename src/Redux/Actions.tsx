export const NAVIGATE_TO: string = 'NAVIGATE_TO';
export const GO_BACK: string = 'GO_BACK';
export const SET_NAVIGATOR: string = 'SET_NAVIGATOR';
export const SET_ACTIVE_ROUTE: string = 'SET_ACTIVE_ROUTE';

export const navigateTo = (routeName: string) => ({
  type: NAVIGATE_TO,
  routeName,
});

export const goBack = () => ({
  type: GO_BACK,
});

export const setNavigator = (navigator: string) => ({
  type: SET_NAVIGATOR,
  navigator,
});

export const setActiveRoute = (activeRouteName: string) => ({
  type: SET_ACTIVE_ROUTE,
  activeRouteName,
});
