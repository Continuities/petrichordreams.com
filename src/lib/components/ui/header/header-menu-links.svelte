<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { resolve } from '$app/paths';
	import HeaderLink from './header-link.svelte';
	import { localisedResolve } from '$lib/utils';

	let { class: className, onclick }: { class?: string; onclick?: () => void } = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<ul class={className} {onclick}>
	<li>
		<HeaderLink href="/" label={m.menu_home()} />
	</li>
	<li>
		<HeaderLink href="/custom" label={m.menu_custom()} />
	</li>
	<li>
		<HeaderLink href="/rituals" label={m.menu_rituals()} />
	</li>
	<li>
		<HeaderLink href="/about" label={m.menu_about()} />
	</li>
	<li>
		<HeaderLink href="/gallery" label={m.gallery()} />
	</li>
</ul>
