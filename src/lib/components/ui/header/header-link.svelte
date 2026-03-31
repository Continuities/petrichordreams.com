<script lang="ts">
	import { page } from '$app/state';
	import { localisedResolve } from '$lib/utils';
	import type { RouteId, Pathname } from '$app/types';

	interface Props {
		href: RouteId | Pathname;
		label: string;
	}
	let { href, label }: Props = $props();
	let isActive = $derived(page.url.pathname === href);
</script>

<a href={localisedResolve(href)} class={isActive ? 'underline' : 'hover:underline opacity-80'}>
	{label}
</a>
