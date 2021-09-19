export const AsyncExecute = (job: Function) => {
	new Promise((resolve, reject) => {
		try {
			job();
			resolve({});
		} catch (e) {
			reject(e);
		}
	});
};

export const AwaitableExecute = (job: Function): Promise<any> => {
	return new Promise((resolve, reject) => {
		try {
			job();
			resolve({} as never);
		} catch (e) {
			reject(e);
		}
	});
};
