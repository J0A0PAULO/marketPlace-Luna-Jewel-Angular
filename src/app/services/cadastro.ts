import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CadastroService } from "./types/Cadastro";

@Injectable({
  providedIn : "root",
})

export class Cadastro {

  private readonly API = "http://localhost:3000/login";

  constructor(private http: HttpClient) {

  }

  pegar() : Observable<CadastroService[]>{
    return this.http.get<CadastroService[]>(this.API);
  }

  adicionar( adicionar : CadastroService) : Observable<CadastroService> {
    return this.http.put<CadastroService>(this.API, adicionar);
  }

  atualizar(atualizar : CadastroService) : Observable<CadastroService>{
    return this.http.post<CadastroService>(`${this.API}/${atualizar.id}`, atualizar);
  }

  remover(id : string | number) :Observable<CadastroService> {
    return this.http.delete<CadastroService>(`${this.API}/${id}`)
  }

}