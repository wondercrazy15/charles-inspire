import { Component, OnInit } from '@angular/core';
import { DataservieService } from 'src/app/services/dataservie.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users:any = [];

  constructor(private dataService :DataservieService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((result) => {
      this.users = result
    });
  }

}
