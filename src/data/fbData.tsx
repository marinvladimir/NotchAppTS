import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { config } from "../config/config";

export const db = getFirestore(initializeApp(config.firebaseConfig));
