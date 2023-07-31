import { uploadBytes, ref } from 'firebase/storage';
import { storage } from '../../util/firebase';
import { authStore } from '../../util/store';

/** @type {import('./$types').Actions} */
export const actions = {
	upload_to_gcs: async ({ cookies, request }) => {
		const data = await request.formData();
		const files = data.get('files');

		if (files instanceof FileList && files.length > 0) {
			const file = files[0];
			let userId;
			authStore.subscribe((value) => {
				userId = value.user.uid;
			});
			const storageRef = ref(storage, `/user-audio-files/${userId}/${file.name}`);
			uploadBytes(storageRef, file).then((snapshot) => {
				console.log('Uploaded a blob or file!');
				console.log(snapshot);
			});
			return { status: 200, success: true };
		} else {
			if (!files) {
				return { status: 400, body: { error: 'No file uploaded' } };
			}
		}
	}
};
