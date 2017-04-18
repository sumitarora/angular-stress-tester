import { Component, OnInit } from '@angular/core';
import { Service506Service } from '../../services/service-506.service';

@Component({
  selector: 'app-comp-506',
  templateUrl: './comp-506.component.html',
  styleUrls: ['./comp-506.component.css']
})
export class Comp506Component implements OnInit {

  constructor(private _service: Service506Service) { }

  ngOnInit() {
  }

}
