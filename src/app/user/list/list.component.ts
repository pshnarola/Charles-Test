import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    users: any = [];
    constructor(
        private userService: UserService
    ) {

    }

    ngOnInit(): void {
        this.userService.getUsers().subscribe(res => {
            this.users = res;
        }, err => {
            console.log('err = ', err);
        })
    }

}
