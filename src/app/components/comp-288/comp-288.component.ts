import { Component, OnInit } from '@angular/core';
import { Service288Service } from '../../services/service-288.service';

@Component({
  selector: 'app-comp-288',
  templateUrl: './comp-288.component.html',
  styleUrls: ['./comp-288.component.css']
})
export class Comp288Component implements OnInit {

  constructor(private _service: Service288Service) { }

  ngOnInit() {
  }

}
