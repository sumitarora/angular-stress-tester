import { Component, OnInit } from '@angular/core';
import { Service272Service } from '../../services/service-272.service';

@Component({
  selector: 'app-comp-272',
  templateUrl: './comp-272.component.html',
  styleUrls: ['./comp-272.component.css']
})
export class Comp272Component implements OnInit {

  constructor(private _service: Service272Service) { }

  ngOnInit() {
  }

}
