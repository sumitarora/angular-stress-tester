import { Component, OnInit } from '@angular/core';
import { Service398Service } from '../../services/service-398.service';

@Component({
  selector: 'app-comp-398',
  templateUrl: './comp-398.component.html',
  styleUrls: ['./comp-398.component.css']
})
export class Comp398Component implements OnInit {

  constructor(private _service: Service398Service) { }

  ngOnInit() {
  }

}
