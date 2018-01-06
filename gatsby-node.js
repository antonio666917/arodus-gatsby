"use strict";

exports.createPages = ({ boundActionCreators }) => {
  const { createRedirect } = boundActionCreators;

  createRedirect({
    fromPath: `/the-tools`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/tools`
  });
};
