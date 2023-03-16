import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './routes/router';
import AuthProvider from './providers/auth-provider';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<Router />
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>,
);
