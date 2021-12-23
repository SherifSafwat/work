import { Injectable } from '@angular/core';
//import * as ngfirestore from '@angular/fire/firestore';
import { IProduct } from '../../data/product';

import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: Firestore) { }

  addBook(product: IProduct) {
    const poductsRef = collection(this.firestore, 'poducts'); 
    return addDoc(poductsRef, product);
  }

}
