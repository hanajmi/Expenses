import { Component, OnInit, ViewChild } from '@angular/core';

// Services
import { EntryService } from '../entry.service';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
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
	 * Filter 
	 */
	@ViewChild(MatSort) sort: MatSort;

	/**
	 * Paginator
	 */
	@ViewChild(MatPaginator) paginator: MatPaginator;

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

			// Paginator
			this.dataSource.paginator = this.paginator; 
		});
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
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
