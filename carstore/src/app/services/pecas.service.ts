import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Pecas } from '../interfaces/pecas';


@Injectable({
  providedIn: 'root'
})

export class PecasService {

  constructor(private dataBaseStore: AngularFirestore) { }

  getAll() {
    return this.dataBaseStore.collection('pecas', pecas => pecas.orderBy('nome')).valueChanges({idField: 'firebaseId'}) as Observable<any[]>;
  }

  create(pecas: Pecas) {
    return this.dataBaseStore.collection('pecas').add(pecas);
  }

  update(pecasId: string, pecas: Pecas) {
    return this.dataBaseStore.collection('pecas').doc(pecasId).update(pecas);
  }

  delete(pecasId: string) {
    return this.dataBaseStore.collection('pecas').doc(pecasId).delete();
  }
}