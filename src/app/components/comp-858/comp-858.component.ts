import { Component, OnInit } from '@angular/core';
import { Service858Service } from '../../services/service-858.service';

@Component({
  selector: 'app-comp-858',
  templateUrl: './comp-858.component.html',
  styleUrls: ['./comp-858.component.css']
})
export class Comp858Component implements OnInit {

  constructor(private _service: Service858Service) { }

  ngOnInit() {
  }

}
