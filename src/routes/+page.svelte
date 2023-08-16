<script lang="ts">
	import rapidCast from '$lib/assets/rapidCast.png';
	import menu from '$lib/assets/menu.png';
	import music from '$lib/assets/music.png';
	import coffee from '$lib/assets/coffee.png';
	import Login from './login.svelte';
</script>

<div class="bg-main_background h-screen flex flex-col items-center">
	<div class="h-12" />
	<div class="space-y-4 flex flex-col items-center text-center">
		<img class="h-32" src={rapidCast} alt="rapidCast" />
		<p class="font-medium text-2xl text-white">収録後のコーヒーブレイクの間に</p>
		<p class="font-medium text-2xl text-white">Podcast の音声編集が完了します</p>
		<div class="h-4" />
		<Login />
	</div>
	<div class="h-16" />
	<!-- <p class="text-2xl border-b-accent1 border-b-2 text-white font-semibold">使用方法</p> -->

	<div class="mx-auto p-8">
		<!-- <div class="flex justify-between">		 -->
		<div class="grid grid-cols-3 gap-16">
			<!-- 1つ目のカード -->
			<div
				class="card bg-main_background border-accent1 border-4 rounded-lg shadow p-6 flex flex-col items-center"
			>
				<img src={menu} alt="menu" class="w-14 h-14" />
				<h3 class="text-white text-2xl font-semibold mt-6 mb-3">STEP 1</h3>
				<p class="text-white text-base">編集したい項目を設定</p>
			</div>

			<!-- 2つ目のカード -->
			<div
				class="card bg-main_background border-accent1 border-4 rounded-lg shadow p-6 flex flex-col items-center"
			>
				<img src={music} alt="music" class="w-14 h-14" />
				<h3 class="text-white text-2xl font-semibold mt-6 mb-3">STEP 2</h3>
				<p class="text-white text-base">音声ファイルをアップロード</p>
			</div>

			<!-- 3つ目のカード -->
			<div
				class="card bg-main_background border-accent1 border-4 rounded-lg shadow p-6 flex flex-col items-center"
			>
				<img src={coffee} alt="coffee" class="w-14 h-14" />
				<h3 class="text-white text-2xl font-semibold mt-6 mb-3">STEP 3</h3>
				<p class="text-white text-base">休憩しながら数分待つだけ！</p>
			</div>
		</div>
		<div class="h-8" />

		<div class="mx-auto p-8 rounded-lg border-accent1 border-2">
			<!-- 大きなタイトル -->
			<h2 class="text-2xl font-semibold mb-6 text-white">設定できる項目</h2>

			<!-- 3x2のマスでリスト形式の内容 -->
			<div class="grid grid-cols-3 gap-6">
				<div class="flex flex-col items-center">
					<p class="text-xl text-white font-medium">・ 音量レベル</p>
				</div>
				<div class="flex flex-col items-center">
					<p class="text-xl text-white font-medium">・ 無音部分カット</p>
				</div>
				<div class="flex flex-col items-center">
					<p class="text-xl text-white font-medium">・ 項目3</p>
				</div>
				<div class="flex flex-col items-center">
					<p class="text-xl text-white font-medium">・ 項目4</p>
				</div>
				<div class="flex flex-col items-center">
					<p class="text-xl text-white font-medium">・ 項目5</p>
				</div>
				<div class="flex flex-col items-center">
					<p class="text-xl text-white font-medium">・ 項目6</p>
				</div>
			</div>
		</div>
	</div>
</div>
