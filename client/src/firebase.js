import firebase from 'firebase/compat/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

import firebaseConfig from './permissions';
firebase.initializeApp(firebaseConfig);

export async function uploadImage(img) {
    const storage = getStorage();
    const imgRef = ref(storage, img);
    const storageRef = ref(storage, 'files');

    const snap = await uploadBytes(storageRef, imgRef);
    console.log('done!');
}
