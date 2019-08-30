import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  addSow() {
    this.router.navigate(['sow'], {relativeTo: this.route});
  }

  updateMilestone() {
    this.router.navigate(['milestone'], {relativeTo: this.route});
  }

  genDashboard() {
    this.router.navigate(['dashboard'], {relativeTo: this.route});
  }

  uploadSOW() {
    this.router.navigate(['log'], {relativeTo: this.route});
  }

  addProject() {
    this.router.navigate(['admin']);
  }
}
