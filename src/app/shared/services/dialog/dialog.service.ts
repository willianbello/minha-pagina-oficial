import { Injectable } from '@angular/core';
import {RetornoErro} from '../../models/retorno-erro/retorno-erro';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogErroComponent} from '../../components/dialog-erro/dialog-erro.component';

@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public mensagemErro(titulo: string, erro: string, logErro = ''): MatDialogRef<any, any> {
    if (logErro !== '') {
      console.log(logErro);
    }
    const retornoErro = {} as RetornoErro;
    retornoErro.status = 400;
    retornoErro.error = titulo;
    retornoErro.message = erro;
    return this.dialog.open(DialogErroComponent);
  }
}
