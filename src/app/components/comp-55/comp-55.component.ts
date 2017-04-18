import { Component, OnInit } from '@angular/core';
import { Service55Service } from '../../services/service-55.service';

@Component({
  selector: 'app-comp-55',
  templateUrl: './comp-55.component.html',
  styleUrls: ['./comp-55.component.css']
})
export class Comp55Component implements OnInit {

  constructor(private _service: Service55Service) { }

  ngOnInit() {
  }

}
