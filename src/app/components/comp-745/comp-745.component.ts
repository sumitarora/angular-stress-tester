import { Component, OnInit } from '@angular/core';
import { Service745Service } from '../../services/service-745.service';

@Component({
  selector: 'app-comp-745',
  templateUrl: './comp-745.component.html',
  styleUrls: ['./comp-745.component.css']
})
export class Comp745Component implements OnInit {

  constructor(private _service: Service745Service) { }

  ngOnInit() {
  }

}
