import { ChannelReceiveType, ReceiverChannel, SenderChannel } from './types';
import { AsyncQueue } from './impl/async-queue';

export class Channel<T> implements ReceiverChannel<T>, SenderChannel<T> {
	protected queue: AsyncQueue<T>;

	get isClosed(): boolean {
		return this.queue.isClosed;
	}

	constructor() {
		this.queue = new AsyncQueue(0);
	}

	send = (value: T) => this.queue.send(value);

	receive = async (): Promise<ChannelReceiveType<T>> => this.queue.receive();

	close = () => this.queue.close();
}

export class BufferedChannel<T> extends Channel<T> {
	constructor(readonly buffer: number) {
		super();
		this.queue = new AsyncQueue(buffer);
	}
}
