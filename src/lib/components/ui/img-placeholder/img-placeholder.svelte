<script lang="ts">
	let { class: _class }: { class?: string } = $props();
</script>

<div class={`aspect-1000/1618 bg-gray-500/30${_class ? ` ${_class}` : ''}`}></div>
