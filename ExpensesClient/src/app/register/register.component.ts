import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent {

	registerForm: FormGroup;

	constructor(fb: FormBuilder,
				private service: AuthService
				) {
		this.registerForm = fb.group({
			userName: ['', Validators.required],
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required],
		}, { validator: matchingFields('password', 'confirmPassword') });
	}

	onSubmit() {
		console.log(this.registerForm.value);
		delete this.registerForm.value.confirmPassword;
		this.service.register(this.registerForm.value).subscribe( (data: any) => {
			console.log(data);

			// Set User Name And Token To Local Storage For Autenticated User			
			localStorage.setItem('userName', data.userName);
			localStorage.setItem('token_value', data.token);
		});
	}
}

function matchingFields(field1, field2) {
	return form => {
		if(form.controls[field1].value !== form.controls[field2].value)
		return { matchingFields: true }
	}
}