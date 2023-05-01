import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api/api.service';
import { Commisariat, commisariats } from '../shared/model/commisariat';
import { police } from '../shared/model/police';
import { Procedure } from '../shared/model/procedure.model';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {

  name = "CAMEROUN";
  image = "assets/Images/cameroon/cameroun.png";
  procedures: Procedure[] = [];
  police = commisariats;
  security = police;

  constructor(private Service: ApiService) { }

  ngOnInit(): void {
    this.Service.getAllProcedure().subscribe({
      next: procedures => this.procedures = procedures
    })
    
    console.log(this.police)
    console.log(this.security)
  }

}
