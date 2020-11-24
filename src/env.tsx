export const env = {
	urlServer:
		process.env.NODE_ENV !== 'production'
			? 'http://127.0.0.1:3001'
			: 'https://peru-iot4.com:3001',
	// urlServer: 'https://peru-iot4.com:3001',
};
