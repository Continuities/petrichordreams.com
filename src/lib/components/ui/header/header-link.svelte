<script lang="ts">
	import type { ResolvedPathname } from '$app/types';
	import { page } from '$app/state';

	interface Props {
		href: ResolvedPathname;
		label: string;
	}
	let { href, label }: Props = $props();
	let isActive = $derived(page.url.pathname === href);
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a {href} class={isActive ? 'underline' : 'hover:underline opacity-80'}>
	{label}
</a>
