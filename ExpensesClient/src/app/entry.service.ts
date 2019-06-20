import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';


@Injectable({
	providedIn: 'root'
})

export class EntryService {

	baseUrl: string = 'http://localhost:7089/api/entries';
	
	constructor(private http: HttpClient) { }

	/**
	 * Get All Entriy
	 */
	getAll() {
		return this.http.get(this.baseUrl);
	}

	/**
	 * Insert Entriy
	 */
	store(request) {
		return this.http.post(this.baseUrl, request);
	}

	/**
	 * Update Entriy
	 */
	update(id, request) {
		return this.http.put(this.baseUrl + '/' + id, request);	
	}

}
