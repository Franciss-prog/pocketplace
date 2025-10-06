<script lang="ts">
	import { Input, Button } from '$lib';
</script>

<form class="flex h-full flex-col justify-between">
	<div class="space-y-4">
		<Input placeholder="Username/Email" />
		<Input placeholder="Password" />
	</div>
	<div class="flex w-full justify-between">
		<Button>Login</Button>
	</div>
</form>
