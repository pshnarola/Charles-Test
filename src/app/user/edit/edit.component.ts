import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    userForm: FormGroup = new FormGroup({});
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        if (history.state.user) {
            const userData = history.state.user;
            this.userForm = new FormGroup({
                name: new FormControl(userData.name),
                username: new FormControl(userData.username),
                phone: new FormControl(userData.phone),
                email: new FormControl(userData.email),
                website: new FormControl(userData.website),
                company: new FormGroup({
                    name: new FormControl(userData.company.name),
                    catchPhrase: new FormControl(userData.company.catchPhrase),
                    bs: new FormControl(userData.company.bs),
                }),
                address: new FormGroup({
                    street: new FormControl(userData.address.street),
                    suite: new FormControl(userData.address.suite),
                    city: new FormControl(userData.address.city),
                    zipcode: new FormControl(userData.address.zipcode),
                }),
            });
        } else {
            this.router.navigateByUrl('');
        }
    }

    ngOnInit(): void {
    }

    onSubmit() {
        console.log('submit');
        this.router.navigateByUrl('/');
    }

}
