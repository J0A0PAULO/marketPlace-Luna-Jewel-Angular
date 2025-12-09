import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './types/loginTypes';

@Injectable({
  providedIn: 'root',
})
export class Login {
  
  private readonly API = "http://localhost:3000/login";


  constructor(private http :HttpClient) {

  }
   
  listar() : Observable<LoginService[]> {
    return this.http.get<LoginService[]>(this.API);
  }

  adicionar(Login : LoginService) : Observable<LoginService> {
    return this.http.put<LoginService>(this.API, Login)
  }

  atualizar(login : LoginService): Observable<LoginService> {
    return this.http.post<LoginService>(`${this.API}/${login.id}`, login)
  }
  
  remover(id : string | number) : Observable<any>{
    return this.http.delete(`${this.API}/${id}`)
  }

}
