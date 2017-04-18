import { Component, OnInit } from '@angular/core';
import { Service448Service } from '../../services/service-448.service';

@Component({
  selector: 'app-comp-448',
  templateUrl: './comp-448.component.html',
  styleUrls: ['./comp-448.component.css']
})
export class Comp448Component implements OnInit {

  constructor(private _service: Service448Service) { }

  ngOnInit() {
  }

}
