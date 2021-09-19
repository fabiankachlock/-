export type ChannelReceiveType<T> = {
	ok: boolean;
	value: T | undefined;
};

export interface ReceiverChannel<T> {
	receive(): Promise<ChannelReceiveType<T>>;
	// has no 'close' by convention, because channels should always be closed from sender site
}

export interface SenderChannel<T> {
	isClosed: boolean;
	send(value: T): void;
	close(): void;
}
