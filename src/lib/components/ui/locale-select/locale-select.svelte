<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { getLocale, setLocale, type Locale, locales } from '$lib/paraglide/runtime';
	const currentLocale = getLocale();
</script>

<Select.Root
	type="single"
	value={currentLocale}
	onValueChange={(value) => setLocale(value as Locale)}
>
	<Select.Trigger>{currentLocale.toUpperCase()}</Select.Trigger>
	<Select.Content>
		{#each locales as locale (locale)}
			<Select.Item value={locale}>
				{locale.toUpperCase()}
			</Select.Item>
		{/each}
	</Select.Content>
</Select.Root>
