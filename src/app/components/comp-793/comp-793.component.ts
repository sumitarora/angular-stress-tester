import { Component, OnInit } from '@angular/core';
import { Service793Service } from '../../services/service-793.service';

@Component({
  selector: 'app-comp-793',
  templateUrl: './comp-793.component.html',
  styleUrls: ['./comp-793.component.css']
})
export class Comp793Component implements OnInit {

  constructor(private _service: Service793Service) { }

  ngOnInit() {
  }

}
