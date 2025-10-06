<script>
	export let href = '#';
</script>

<a
	{href}
	class="group relative flex items-center gap-2 overflow-hidden rounded-full border-2 border-dark px-6 py-2 text-lg text-light dark:border-light dark:text-light"
>
	<!-- sliding background -->
	<span
		class="absolute inset-0 w-0 bg-dark transition-all duration-300 ease-out group-hover:w-full dark:bg-light"
	></span>

	<!-- button text -->
	<span class="relative z-10 group-hover:text-light dark:group-hover:text-dark">
		<slot />
	</span>
</a>
