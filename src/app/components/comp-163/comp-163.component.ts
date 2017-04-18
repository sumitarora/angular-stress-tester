import { Component, OnInit } from '@angular/core';
import { Service163Service } from '../../services/service-163.service';

@Component({
  selector: 'app-comp-163',
  templateUrl: './comp-163.component.html',
  styleUrls: ['./comp-163.component.css']
})
export class Comp163Component implements OnInit {

  constructor(private _service: Service163Service) { }

  ngOnInit() {
  }

}
