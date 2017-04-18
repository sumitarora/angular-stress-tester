import { Component, OnInit } from '@angular/core';
import { Service698Service } from '../../services/service-698.service';

@Component({
  selector: 'app-comp-698',
  templateUrl: './comp-698.component.html',
  styleUrls: ['./comp-698.component.css']
})
export class Comp698Component implements OnInit {

  constructor(private _service: Service698Service) { }

  ngOnInit() {
  }

}
