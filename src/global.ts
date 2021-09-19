import { BufferedChannel, Channel } from './channel';
import { ReceiverChannel, SenderChannel } from './types';
import { AsyncExecute, AwaitableExecute } from './impl/go-routine';

export const make = <T>(buffer: number = 0): Channel<T> | BufferedChannel<T> => new BufferedChannel<T>(buffer);

export const close = <T>(chan: SenderChannel<T>) => {
	chan.close();
};

export const len = <T>(chan: SenderChannel<T> | ReceiverChannel<T>): number => {
	// @ts-ignore
	const queue = chan['queue']['queue'] as Array<T>;

	return queue.length;
};

export const receiver = <T>(chan: Channel<T>): ReceiverChannel<T> => chan;
export const sender = <T>(chan: Channel<T>): SenderChannel<T> => chan;

export const go = AsyncExecute;

export const awaitExecute = async (job: Function) => {
	await AwaitableExecute(job);
};
