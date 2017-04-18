import { Component, OnInit } from '@angular/core';
import { Service97Service } from '../../services/service-97.service';

@Component({
  selector: 'app-comp-97',
  templateUrl: './comp-97.component.html',
  styleUrls: ['./comp-97.component.css']
})
export class Comp97Component implements OnInit {

  constructor(private _service: Service97Service) { }

  ngOnInit() {
  }

}
