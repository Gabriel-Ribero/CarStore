import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Carros } from '../interfaces/carros';

@Injectable({
  providedIn: 'root'
})

export class CarrosService {

  constructor(private dataBaseStore: AngularFirestore) { }

  // getAll() {
  //   return this.dataBaseStore.collection<Carros>('carros', carros => carros.orderBy('Km')).valueChanges({ idField: 'firebaseId' }) as Observable<any[]>;
  // }

  getAll(): Observable<Carros[]> {
    return this.dataBaseStore.collection<Carros>('carros', ref => ref.orderBy('Km'))
      .valueChanges({ idField: 'firebaseId' })
      .pipe(
        tap(data => console.log('Data fetched:', data)),
        catchError(error => {
          console.error('Error fetching data:', error);
          return throwError(error);
        })
      );
  }
  

  create(carros: Carros) {
    return this.dataBaseStore.collection<Carros>('carros').add(carros);
  }

  update(carrosId: string, carros: Carros) {
    return this.dataBaseStore.collection<Carros>('carros').doc(carrosId).update(carros);
  }

  delete(carrosId: string) {
    return this.dataBaseStore.collection<Carros>('carros').doc(carrosId).delete();
  }
}
