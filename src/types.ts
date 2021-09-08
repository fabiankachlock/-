export type AsyncQueueReceive<T> = {
	ok: boolean;
	value: T | undefined;
};
