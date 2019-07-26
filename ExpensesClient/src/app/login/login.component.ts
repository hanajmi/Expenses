import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	loginData = {
		userName: '',
		password: ''
	};

	constructor(private service: AuthService,
				private router: Router) { }

	login() {
		//console.log(this.loginData);
		//console.table(this.loginData);
		this.service.login(this.loginData).subscribe( (data: any) => {
			console.log(data);	

			// Set User Name And Token To Local Storage For Autenticated User			
			localStorage.setItem('userName', data.userName);
			localStorage.setItem('token_value', data.token);

			this.router.navigate(['/entries']);
		}, 
			(error) => alert(error.error.Message)
		);
	}
}
