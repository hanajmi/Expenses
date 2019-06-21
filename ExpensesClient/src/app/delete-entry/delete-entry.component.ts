import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-delete-entry',
  templateUrl: './delete-entry.component.html',
  styleUrls: ['./delete-entry.component.css']
})
export class DeleteEntryComponent implements OnInit {

  id;
  entry = {
    description: '',
    is_expense: false,
    value: 0,
  }

  constructor(private route: ActivatedRoute,
              private service: EntryService,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.show(this.id).subscribe((data: any) => {
      console.log(data);
      this.entry.description = data.description;
      this.entry.is_expense = data.is_expense;
      this.entry.value = data.value
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }

  confirm() {
    console.log('confirm');
    this.service.delete(this.id).subscribe( (data) => {
      console.log(data);
    });
  }

}
