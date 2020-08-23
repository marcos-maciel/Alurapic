import { Photo } from './photo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
//injectable: usado para conseguir usar um serviço em outros lugares
//root: quando usado sera criado sempre apenas uma instancia desse serviço
export class PhotoService {

  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {

    return this.http //http usado para pegar informações do back
      .get<Photo[]>(API + '/' + userName + '/photos');
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());

    return this.http //http usado para pegar informações do back
      .get<Photo[]>(API + '/' + userName + '/photos', { params });
  }
}
