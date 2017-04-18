import { Component, OnInit } from '@angular/core';
import { Service419Service } from '../../services/service-419.service';

@Component({
  selector: 'app-comp-419',
  templateUrl: './comp-419.component.html',
  styleUrls: ['./comp-419.component.css']
})
export class Comp419Component implements OnInit {

  constructor(private _service: Service419Service) { }

  ngOnInit() {
  }

}
