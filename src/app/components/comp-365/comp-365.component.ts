import { Component, OnInit } from '@angular/core';
import { Service365Service } from '../../services/service-365.service';

@Component({
  selector: 'app-comp-365',
  templateUrl: './comp-365.component.html',
  styleUrls: ['./comp-365.component.css']
})
export class Comp365Component implements OnInit {

  constructor(private _service: Service365Service) { }

  ngOnInit() {
  }

}
