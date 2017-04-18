import { Component, OnInit } from '@angular/core';
import { Service95Service } from '../../services/service-95.service';

@Component({
  selector: 'app-comp-95',
  templateUrl: './comp-95.component.html',
  styleUrls: ['./comp-95.component.css']
})
export class Comp95Component implements OnInit {

  constructor(private _service: Service95Service) { }

  ngOnInit() {
  }

}
