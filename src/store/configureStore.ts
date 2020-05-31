import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/root-reducers';

const loggerMiddleware = createLogger();

interface ConfigureStoreOpts {
	middlewares: [];
}

export default function configureAppStore(options?: ConfigureStoreOpts) {
	const storeConfig = {
		reducer: rootReducer,
		middleware: [ loggerMiddleware, ...getDefaultMiddleware() ]
	};
	if (options && options.middlewares) {
		storeConfig.middleware.push(...options.middlewares);
	}
	return configureStore(storeConfig);
}
