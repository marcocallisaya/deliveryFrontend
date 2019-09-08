import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.css']
})
export class DialogConfirmationComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
