import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private service: ProjectService, private router: Router, private route: ActivatedRoute) { }

  projects = [];
  ngOnInit(): void {
    this.projects = this.service.projects
  }

  getProjectId(id: number) {
    this.router.navigate(['project', this.trimName(this.projects[id].name)], { relativeTo: this.route})

  }

  trimName(name: String) : string {
    return name.split(' ').join('').toLowerCase();
  }
}
