import { Component, OnInit } from '@angular/core';
import { Service428Service } from '../../services/service-428.service';

@Component({
  selector: 'app-comp-428',
  templateUrl: './comp-428.component.html',
  styleUrls: ['./comp-428.component.css']
})
export class Comp428Component implements OnInit {

  constructor(private _service: Service428Service) { }

  ngOnInit() {
  }

}
