<template>
	<div>
		<p>{{info}}</p>
	</div>
</template>

<script type="text/javascript">
	export default{

		data () {
			return {
				info: null
			}
		},
		mounted () {
			axios
			.get('/api/test')
			.then(response => (this.info = response.data))
		}

	}
</script>