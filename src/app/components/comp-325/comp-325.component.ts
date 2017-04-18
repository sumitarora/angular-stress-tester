import { Component, OnInit } from '@angular/core';
import { Service325Service } from '../../services/service-325.service';

@Component({
  selector: 'app-comp-325',
  templateUrl: './comp-325.component.html',
  styleUrls: ['./comp-325.component.css']
})
export class Comp325Component implements OnInit {

  constructor(private _service: Service325Service) { }

  ngOnInit() {
  }

}
