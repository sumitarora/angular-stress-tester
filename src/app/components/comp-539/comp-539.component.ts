import { Component, OnInit } from '@angular/core';
import { Service539Service } from '../../services/service-539.service';

@Component({
  selector: 'app-comp-539',
  templateUrl: './comp-539.component.html',
  styleUrls: ['./comp-539.component.css']
})
export class Comp539Component implements OnInit {

  constructor(private _service: Service539Service) { }

  ngOnInit() {
  }

}
