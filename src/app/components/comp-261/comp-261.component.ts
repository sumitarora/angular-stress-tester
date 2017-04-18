import { Component, OnInit } from '@angular/core';
import { Service261Service } from '../../services/service-261.service';

@Component({
  selector: 'app-comp-261',
  templateUrl: './comp-261.component.html',
  styleUrls: ['./comp-261.component.css']
})
export class Comp261Component implements OnInit {

  constructor(private _service: Service261Service) { }

  ngOnInit() {
  }

}
