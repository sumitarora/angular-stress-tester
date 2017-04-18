import { Component, OnInit } from '@angular/core';
import { Service245Service } from '../../services/service-245.service';

@Component({
  selector: 'app-comp-245',
  templateUrl: './comp-245.component.html',
  styleUrls: ['./comp-245.component.css']
})
export class Comp245Component implements OnInit {

  constructor(private _service: Service245Service) { }

  ngOnInit() {
  }

}
