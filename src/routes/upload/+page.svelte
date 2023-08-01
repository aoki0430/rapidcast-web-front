<!-- ######## Script ####################################################################################-->
<script lang="ts">
	/** @type {import('./$types').ActionData} */
	import { CloudArrowUpSolid } from 'flowbite-svelte-icons';
	import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
	import { storage } from '../../util/firebase';
	import { authStore } from '../../util/store';

	let files: FileList | null = null;
	let uploadedUrl: string; // ここでアップロードされたファイルのURLを保存します

	function handleFileChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files) {
			files = input.files;
		}
		FormData;
	}

	function uploadFile() {
		if (files != null) {
			let file = files[0];
			let userId;
			authStore.subscribe((value) => {
				userId = value.user.uid;
			});
			const storageRef = ref(storage, `/user-audio-files/${userId}/${file.name}`);
			uploadBytes(storageRef, file).then((snapshot) => {
				console.log('Uploaded a blob or file!');
				console.log(snapshot);
			});
			console.log('success!!!');

			let downloadURL;
			getDownloadURL(storageRef).then((url) => {
				console.log(url);
				downloadURL = url;
			});
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
{/if}

<div class="h-screen font-sans text-gray-900 bg-gray-300 border-box">
	<!-- <form method="POST" action="?/upload_to_gcs" class="relative w-4/5 h-32 max-w-xs mb-10"> -->
	<button
		on:click={uploadFile}
		class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
	>
		<span
			class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
		>
			<CloudArrowUpSolid class="w-4 h-4 mr-2" />
			<span>Upload</span>
		</span>
	</button>

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
						name="uploaded_files"
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
	<!-- </form> -->
</div>
