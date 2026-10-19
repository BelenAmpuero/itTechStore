import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { app } from './config.js';

const db = getFirestore(app)

export const getProducts = async () => {
const querySnapshot = await getDocs(collection(db, "items"));
const products = []

querySnapshot.forEach(doc => {
    products.push({...doc.data(), id: doc.id})
})

return products
}

export const getCategories = async () => {
const querySnapshot = await getDocs(collection(db, "categories"));
const categories = []

querySnapshot.forEach(doc => {categories.push({...doc.data(), id: doc.id})
})

return categories
}

export const getProductsByCategory = async (category) => {
if (!category) return []

const q = query(collection(db, "items"), where("category", "==", category));

const querySnapshot = await getDocs(q);
const products = []

console.log("cantidad de docs:", querySnapshot.size);

querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
});
 console.log("filtrados:", products);
return products;
}

export const getDetail = async (id) => {

const docRef = doc(db, "items", id)
const docSnap = await getDoc(docRef)

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data())
  return {...docSnap.data(), id: docSnap.id}
} else {
    return null
}
}

export const createOrder = async (user, item, total) => {

    const order = {
        user,
        item,
        total,
        time: serverTimestamp()
    }
  try {
    const docRef = await addDoc(collection(db, "orders"), order );
    return docRef.id 

  } catch (error) {
    console.error("Error al agregar documento:", error);
  }
    
};
