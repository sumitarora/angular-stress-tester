import { Component, OnInit } from '@angular/core';
import { Service738Service } from '../../services/service-738.service';

@Component({
  selector: 'app-comp-738',
  templateUrl: './comp-738.component.html',
  styleUrls: ['./comp-738.component.css']
})
export class Comp738Component implements OnInit {

  constructor(private _service: Service738Service) { }

  ngOnInit() {
  }

}
