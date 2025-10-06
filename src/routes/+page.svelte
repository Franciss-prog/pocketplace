<script lang="ts">
	import { Link } from '$lib';
</script>

<div class="flex h-full flex-col justify-between">
	<!-- Headline -->
	<span class="text-5xl leading-tight tracking-wide uppercase" id="headline">
		Never lose track <br />
		of your stuff <br />
		again.
	</span>

	<!-- Bottom Section -->
	<div class="flex w-full items-end justify-between">
		<!-- Left a tag -->
		<Link href="/auth">Go -></Link>

		<!-- Right brand -->
		<span class="text-3xl tracking-wider uppercase md:text-4xl" id="brand"> PocketPlace. </span>
	</div>
</div>
