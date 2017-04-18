import { Component, OnInit } from '@angular/core';
import { Service324Service } from '../../services/service-324.service';

@Component({
  selector: 'app-comp-324',
  templateUrl: './comp-324.component.html',
  styleUrls: ['./comp-324.component.css']
})
export class Comp324Component implements OnInit {

  constructor(private _service: Service324Service) { }

  ngOnInit() {
  }

}
