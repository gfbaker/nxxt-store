// sedear la db

import {collection, addDoc} from 'firebase/firestore';
import db from './firebase-config.js';
import nfts from '../nfts.js';

const itemsRef = collection(db, "nfts");
const promises = nfts.map(nft => (
   addDoc(itemsRef, nft)));

Promise.all(promises).then(() => {
    process.exit(0)
});
