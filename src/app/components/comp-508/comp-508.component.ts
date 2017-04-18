import { Component, OnInit } from '@angular/core';
import { Service508Service } from '../../services/service-508.service';

@Component({
  selector: 'app-comp-508',
  templateUrl: './comp-508.component.html',
  styleUrls: ['./comp-508.component.css']
})
export class Comp508Component implements OnInit {

  constructor(private _service: Service508Service) { }

  ngOnInit() {
  }

}
