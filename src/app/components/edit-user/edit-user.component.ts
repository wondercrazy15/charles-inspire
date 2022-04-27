import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataservieService } from 'src/app/services/dataservie.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public user_id:any = null;
  public user: any = null;
  constructor(private route: ActivatedRoute, private dataService :DataservieService) { 
    this.user_id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.dataService.getUserById(this.user_id).subscribe((result) => {
      this.user = result;
    });
  }

}
