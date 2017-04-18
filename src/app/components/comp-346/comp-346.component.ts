import { Component, OnInit } from '@angular/core';
import { Service346Service } from '../../services/service-346.service';

@Component({
  selector: 'app-comp-346',
  templateUrl: './comp-346.component.html',
  styleUrls: ['./comp-346.component.css']
})
export class Comp346Component implements OnInit {

  constructor(private _service: Service346Service) { }

  ngOnInit() {
  }

}
