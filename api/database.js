import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./app";

const db = getFirestore(app);

export function getProject() {
    return new Promise((res, rej) => {
        const q = query(collection(db, "users"), where("userId", "==", '12345'));
        getDocs(q).then((result) => {
            result.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            })
            res(true)
        }).catch(err => rej(err.message));
    })
}
