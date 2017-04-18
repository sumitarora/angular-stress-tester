import { Component, OnInit } from '@angular/core';
import { Service228Service } from '../../services/service-228.service';

@Component({
  selector: 'app-comp-228',
  templateUrl: './comp-228.component.html',
  styleUrls: ['./comp-228.component.css']
})
export class Comp228Component implements OnInit {

  constructor(private _service: Service228Service) { }

  ngOnInit() {
  }

}
