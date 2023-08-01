import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../util/firebase';
import { authStore } from '../../util/store';
import { get } from 'svelte/store';

/** @type {import('./$types').Actions} */
export const actions = {
	upload_to_gcs: async ({ cookies, request }) => {
		console.log('upload_to_gcs');
		const data = await request.formData();
		console.log(data);
		const file = data.get('uploaded_files');
		console.log(file);

		if (file instanceof File) {
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
			return { status: 200, success: true, downloadURL: downloadURL };
		} else {
			console.log('here');

			if (!file) {
				return { status: 400, body: { error: 'No file uploaded' } };
			}
		}
	}
};
