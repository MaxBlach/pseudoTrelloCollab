import { collection, query, where, getDocs, getDoc, getFirestore } from "firebase/firestore";
import { app } from "./app";

const db = getFirestore(app);

export const getProject = async () => {
    const q = query(collection(db, "users"), where("userId", "==", '12345'));
    const result = await getDocs(q);
    let data = [];
    result.forEach((doc) => {
        data.push(doc.data());
    });
    return data
}

export const getColumns = (columnId) => {
    return new Promise((res, rej) => {
        const doc = doc(db, "columns", `${columnId}`);
        getDoc(docRef).then((result) => {
            if (result.exists()) {
                console.log("Document data:", result.data());
                res(true)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(err => rej(err.message));
    })
}