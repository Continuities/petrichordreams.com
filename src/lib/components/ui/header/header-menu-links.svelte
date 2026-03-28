<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { resolve } from '$app/paths';
	import HeaderLink from './header-link.svelte';

	let { class: className, onclick }: { class?: string; onclick?: () => void } = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<ul class={className} {onclick}>
	<li>
		<HeaderLink href={resolve('/')} label={m.menu_home()} />
	</li>
	<li>
		<HeaderLink href={resolve('/custom')} label={m.menu_custom()} />
	</li>
	<li>
		<HeaderLink href={resolve('/rituals')} label={m.menu_rituals()} />
	</li>
	<li>
		<HeaderLink href={resolve('/about')} label={m.menu_about()} />
	</li>
</ul>
