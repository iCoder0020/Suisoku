// @flow
import App from 'fusion-react';
import React from 'react';

export default async function start(): Promise<App> {
  const root = <div>Hello World</div>,
    app = new App(root);
  return app;
}
