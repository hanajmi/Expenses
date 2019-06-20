import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Type } from '../interfaces/Type';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css']
})
export class UpdateEntryComponent implements OnInit {

  // Define Form Bulder
  form: FormGroup;
  id: number;
  
  types: Type[] = [
    { value: true, display: 'Expense'},
    { value: false, display: 'Income'}
  ]

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateEntryComponent>,
              @Inject(MAT_DIALOG_DATA) {description, is_expense, value, id},
              private service: EntryService) { 
                this.id = id;
                this.form = fb.group({
                  description: [description, Validators.required],
                  is_expense: [is_expense, Validators.required],
                  value: [value, Validators.required],
                });          
              }

  ngOnInit() {
  }

  close() {
    //console.log('colse');
    this.dialogRef.close();
  }
  save() {
    //console.log('save');
    this.form.value.id = this.id;
    this.service.update(this.id, this.form.value).subscribe( (data) => {
      console.log('Data:', data);
    });
    this.dialogRef.close();
  }


}
