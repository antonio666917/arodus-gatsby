import ReactGA from "react-ga";

ReactGA.initialize("UA-49026829-1");
exports.onRouteUpdate = ({ location }) => {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
};
