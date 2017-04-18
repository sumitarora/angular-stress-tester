import { Component, OnInit } from '@angular/core';
import { Service122Service } from '../../services/service-122.service';

@Component({
  selector: 'app-comp-122',
  templateUrl: './comp-122.component.html',
  styleUrls: ['./comp-122.component.css']
})
export class Comp122Component implements OnInit {

  constructor(private _service: Service122Service) { }

  ngOnInit() {
  }

}
