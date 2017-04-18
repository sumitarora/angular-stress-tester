import { Component, OnInit } from '@angular/core';
import { Service312Service } from '../../services/service-312.service';

@Component({
  selector: 'app-comp-312',
  templateUrl: './comp-312.component.html',
  styleUrls: ['./comp-312.component.css']
})
export class Comp312Component implements OnInit {

  constructor(private _service: Service312Service) { }

  ngOnInit() {
  }

}
