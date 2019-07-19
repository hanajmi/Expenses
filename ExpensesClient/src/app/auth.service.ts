import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient) { }

	baseUrl: string = 'http://localhost:7089/auth/';

	login(request){
		return this.http.post(this.baseUrl + 'login', request);
	}

	register(request) {
		return this.http.post(this.baseUrl + 'register', request);
	}


	// Get User Name And Token To Local Storage For Autenticated User
	get getUserName() {
		return localStorage.getItem('userName');
	}

	get isAuthenticated() {
		return !!localStorage.getItem('token_value');
	}
}
