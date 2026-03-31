import type { RouteId, Pathname } from '$app/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { localizeHref } from './paraglide/runtime';
import { resolve } from '$app/paths';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export const localisedResolve = <T extends RouteId | Pathname>(
	...args: Parameters<typeof resolve<T>>
) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const resolved = resolve(...(args as [any, any?]));
	return localizeHref(resolved);
};
