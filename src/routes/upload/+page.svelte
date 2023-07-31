<!-- ######## Script ####################################################################################-->
<script lang="ts">
	/** @type {import('./$types').ActionData} */
	import { CloudArrowUpSolid } from 'flowbite-svelte-icons';
	let files: FileList | null = null;
	let uploadedUrl: string; // ここでアップロードされたファイルのURLを保存します

	function handleFileChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files) {
			files = input.files;
		}
	}
</script>

<!-- ######## MarkUp ####################################################################################-->

<h1 class="text-3xl font-bold underline">Welcome to RaidCast!!</h1>
<h1>{files}</h1>

{#if uploadedUrl}
	<div>
		File URL: <a href={uploadedUrl} target="_blank">{uploadedUrl}</a>
	</div>
{/if}

{#if files}
	<h1 class="text-3xl font-bold underline">Are you sure want to transform this file ?</h1>
	<h1>{files[0].name}</h1>
	<h1>{files[0].size}</h1>
	<h1>{files[0].type}</h1>
	<h1>{files[0].lastModified}</h1>
	<h1>{files[0].webkitRelativePath}</h1>
	<h1>{files[0].slice(0, 100)}</h1>

	<!-- <button
		on:click={uploadFile}
		class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
	> -->
	<form method="POST">
		<button
			type="button"
			class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
		>
			<svg
				aria-hidden="true"
				class="w-10 h-3 mr-2 -ml-1"
				viewBox="0 0 256 64"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M28.812 0L0 63.76H34.492L38.768 53.594H48.542L52.818 63.76H90.784V56.001L94.167 63.76H113.806L117.189 55.837V63.76H196.148L205.749 53.858L214.739 63.76L255.294 63.842L226.391 32.058L255.294 0H215.368L206.022 9.71899L197.315 0H111.418L104.042 16.457L96.493 0H62.073V7.495L58.244 0C58.244 0 28.812 0 28.812 0ZM35.486 9.05399H52.299L71.41 52.29V9.05399H89.828L104.589 40.054L118.193 9.05399H136.519V54.806H125.368L125.277 18.955L109.02 54.806H99.045L82.697 18.955V54.806H59.757L55.408 44.549H31.912L27.572 54.797H15.281C15.281 54.797 35.486 9.05399 35.486 9.05399ZM146.721 9.05399H192.063L205.931 24.034L220.246 9.05399H234.114L213.043 32.049L234.114 54.779H219.617L205.749 39.625L191.361 54.779H146.721V9.05399ZM43.665 16.795L35.924 35.067H51.397L43.665 16.795ZM157.918 18.527V26.879H182.654V36.188H157.918V45.306H185.663L198.555 31.876L186.21 18.519H157.918V18.527Z"
					fill="white"
				/></svg
			>
			Pay with Stripe
		</button>

		<button
			disabled
			type="button"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
		>
			<svg
				aria-hidden="true"
				role="status"
				class="inline w-4 h-4 mr-3 text-white animate-spin"
				viewBox="0 0 100 101"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
					fill="#E5E7EB"
				/>
				<path
					d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
					fill="currentColor"
				/>
			</svg>
			Loading...
		</button>
	</form>
{/if}
<div class="h-screen font-sans text-gray-900 bg-gray-300 border-box">
	<form method="POST" action="?/upload_to_gcs" class="relative w-4/5 h-32 max-w-xs mb-10">
		<button
			class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
		>
			<span
				class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
			>
				<CloudArrowUpSolid class="w-4 h-4 mr-2" />
				<span>Upload</span>
			</span>
		</button>
	</form>
	<div class="flex justify-center w-full mx-auto sm:max-w-lg">
		<div
			class="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl"
		>
			<div class="mt-10 mb-10 text-center">
				<h2 class="text-2xl font-semibold mb-2">Upload your files</h2>
				<p class="text-xs text-gray-500">File should be of format .mp4, .avi, .mov or .mkv</p>
				<label
					for="file-upload"
					class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
				>
					<input
						type="file"
						bind:value={files}
						id="file-upload"
						class="hidden"
						on:change={handleFileChange}
						name="uploaded_file"
					/>
					<div class="flex flex-col items-center justify-center pt-5 pb-6">
						<svg
							class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 16"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
							/>
						</svg>
						<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
							<span class="font-semibold">Click to upload</span> or drag and drop
						</p>
						<p class="text-xs text-gray-500 dark:text-gray-400">
							SVG, PNG, JPG or GIF (MAX. 800x400px)
						</p>
					</div>
				</label>
			</div>
		</div>
	</div>
</div>
