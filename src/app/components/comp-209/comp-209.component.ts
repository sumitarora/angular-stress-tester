import { Component, OnInit } from '@angular/core';
import { Service209Service } from '../../services/service-209.service';

@Component({
  selector: 'app-comp-209',
  templateUrl: './comp-209.component.html',
  styleUrls: ['./comp-209.component.css']
})
export class Comp209Component implements OnInit {

  constructor(private _service: Service209Service) { }

  ngOnInit() {
  }

}
