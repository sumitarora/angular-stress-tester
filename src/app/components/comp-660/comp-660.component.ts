import { Component, OnInit } from '@angular/core';
import { Service660Service } from '../../services/service-660.service';

@Component({
  selector: 'app-comp-660',
  templateUrl: './comp-660.component.html',
  styleUrls: ['./comp-660.component.css']
})
export class Comp660Component implements OnInit {

  constructor(private _service: Service660Service) { }

  ngOnInit() {
  }

}
