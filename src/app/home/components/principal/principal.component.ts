import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../../shared/models/usuario/usuario';
import {GithubService} from '../../../shared/services/github/github.service';
import {HttpClient} from '@angular/common/http';
import {DialogService} from '../../../shared/services/dialog/dialog.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  usuario = new Usuario();

  constructor(private githubService: GithubService,
              private dialogService: DialogService) { }

  ngOnInit(): void {
    this.githubService
      .getInformacoesPrincipais('willianbello')
      .subscribe((response: Usuario) => {
        if (response) {
          this.usuario = response;
        }
      }, error => {
        this.dialogService.mensagemErro('Erro', 'Um erro ocorreu');
      });
  }

}
