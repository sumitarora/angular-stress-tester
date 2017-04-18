import { Component, OnInit } from '@angular/core';
import { Service521Service } from '../../services/service-521.service';

@Component({
  selector: 'app-comp-521',
  templateUrl: './comp-521.component.html',
  styleUrls: ['./comp-521.component.css']
})
export class Comp521Component implements OnInit {

  constructor(private _service: Service521Service) { }

  ngOnInit() {
  }

}
