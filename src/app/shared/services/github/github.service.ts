import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppSetting} from '../../../AppSettings';
import {Usuario} from '../../models/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getInformacoesPrincipais(usuario: string) {
    return this.http.get<Usuario>(`${AppSetting.enderecoGitHub}/users/${usuario}`);
  }

}
