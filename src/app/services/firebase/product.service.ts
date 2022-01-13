import { Injectable } from '@angular/core';
import { IProduct } from '../../data/product';
import { Observable } from 'rxjs/internal/Observable';
import { Firestore, addDoc, collection, collectionData, doc, docData, setDoc } from '@angular/fire/firestore'; // deleteDoc, updateDoc, DocumentReference,
import { IBase } from 'src/app/data/base';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  table: string = 'products';

  constructor(private firestore: Firestore) { }

  addBook(obj: IBase) {
    const ref = collection(this.firestore, this.table); 
    return addDoc(ref, obj);
  }

  getBookByID(id: string) {
    const ref = doc(this.firestore, `${this.table}/${id}`);
    return docData(ref , { idField: 'id' }) as Observable<IProduct>;
  }

  getBooks(): Observable<IProduct[]> {
    const ref = collection(this.firestore, this.table);
    return collectionData(ref , { idField: 'id' }) as Observable<IProduct[]>;
  }
  
  updateBook(obj: IProduct) {
    const ref  = doc(this.firestore, `${this.table}/${obj.id}`);
    return setDoc(ref , obj);
  }  

}
