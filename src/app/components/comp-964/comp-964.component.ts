import { Component, OnInit } from '@angular/core';
import { Service964Service } from '../../services/service-964.service';

@Component({
  selector: 'app-comp-964',
  templateUrl: './comp-964.component.html',
  styleUrls: ['./comp-964.component.css']
})
export class Comp964Component implements OnInit {

  constructor(private _service: Service964Service) { }

  ngOnInit() {
  }

}
