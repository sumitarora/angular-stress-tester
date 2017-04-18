import { Component, OnInit } from '@angular/core';
import { Service729Service } from '../../services/service-729.service';

@Component({
  selector: 'app-comp-729',
  templateUrl: './comp-729.component.html',
  styleUrls: ['./comp-729.component.css']
})
export class Comp729Component implements OnInit {

  constructor(private _service: Service729Service) { }

  ngOnInit() {
  }

}
