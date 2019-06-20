import { Component, OnInit } from '@angular/core';

// Services
import { EntryService } from '../entry.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { EntryElement } from '../interfaces/entryElement';
import { UpdateEntryComponent } from '../update-entry/update-entry.component';

@Component({
	selector: 'app-entries',
	templateUrl: './entries.component.html',
	styleUrls: ['./entries.component.css']
})

export class EntriesComponent implements OnInit {

	/**
	 * Name For Html Tag 
	 */
	displayedColumns: string[] = [
		'description',
		'is_expense',
		'value',
		'Actions',
	];

	/**
	 * Values For Form
	 */
	dataSource;

	constructor(private service: EntryService,
				private dialog: MatDialog) { }

	ngOnInit() {
		this.service.getAll().subscribe((data) => {
			console.log('Result - ', data);

			this.dataSource = new MatTableDataSource<EntryElement>(data as EntryElement[])
		});
	}

	edit(entry) {
		console.log(entry);

		// Send Data To UpdateEntryComponent
		this.dialog.open(UpdateEntryComponent, {
			data: {
				id: entry.id,
				description: entry.description,
				is_expense: entry.is_expense,
				value: entry.value
			}
		});
	}

}
