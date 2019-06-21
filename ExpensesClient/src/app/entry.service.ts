import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})

export class EntryService {

	baseUrl: string = 'http://localhost:7089/api/entries';
	
	constructor(private http: HttpClient) { }

	/**
	 * Get All Entries
	 */
	getAll() {
		return this.http.get(this.baseUrl);
	}

	/**
	 * Show Entry 
	 */
	show(id) {
		return this.http.get(this.baseUrl + '/' + id);
	}

	/**
	 * Insert Entry
	 */
	store(request) {
		return this.http.post(this.baseUrl, request);
	}

	/**
	 * Update Entry
	 */
	update(id, request) {
		return this.http.put(this.baseUrl + '/' + id, request);	
	}

	/**
	 * Delete Entry
	 */
	delete(id) {
		return this.http.delete(this.baseUrl + '/' + id);
	}

}
