import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-erro',
  templateUrl: './dialog-erro.component.html',
  styleUrls: ['./dialog-erro.component.scss']
})
export class DialogErroComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogErroComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
