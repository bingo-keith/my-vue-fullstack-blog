<template>
	<div id="app">
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"/>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"/>
	</div>
</template>

<style lang="scss">
	#app {
		height: 100%;
		font-family: 'Times New Roman', Times, serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #333;
		a {
			color: #4078c0;
		}
	}
</style>
