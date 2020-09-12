import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss', './skills-page.media.scss']
})
export class SkillsPageComponent implements OnInit {

  skills = [
    {class: 'iconify', dataIcon: 'icomoon-free:html-five', dataInline: 'false', style: 'color: #73EEFF;', title: 'HTML5'},
    {class: 'iconify', dataIcon: 'cib:css3-shiled', dataInline: 'false', style: 'color: #73EEFF;', title: 'CSS3'},
    {class: 'iconify', dataIcon: 'bx:bxl-sass', dataInline: 'false', style: 'color: #73EEFF;', title: 'Sass'},
    {class: 'iconify', dataIcon: 'bi:bootstrap-fill', dataInline: 'false', style: 'color: #73EEFF;', title: 'Bootstrap'},
    {class: 'iconify', dataIcon: 'bx:bxl-figma', dataInline: 'false', style: 'color: #73EEFF;', title: 'Figma'},
    {class: 'iconify', dataIcon: 'ion:logo-javascript', dataInline: 'false', style: 'color: #73EEFF;', title: 'JavaScript'},
    {class: 'iconify', dataIcon: 'cib:typescript', dataInline: 'false', style: 'color: #73EEFF;', title: 'TypeScript'},
    {class: 'iconify', dataIcon: 'cib:angular', dataInline: 'false', style: 'color: #73EEFF;', title: 'Angular 2+'},
    {class: 'iconify', dataIcon: 'fa-brands:git-square', dataInline: 'false', style: 'color: #73EEFF;', title: 'Git'},
    {class: 'iconify', dataIcon: 'icomoon-free:npm', dataInline: 'false', style: 'color: #73EEFF;', title: 'npm'},
    {class: 'iconify', dataIcon: 'cib:webpack', dataInline: 'false', style: 'color: #73EEFF;', title: 'Webpack'},
    {class: 'iconify', dataIcon: 'dashicons:rest-api', dataInline: 'false', style: 'color: #73EEFF;', title: 'REST API'},
    {class: 'iconify', dataIcon: 'bx:bxl-redux', dataInline: 'false', style: 'color: #73EEFF;', title: 'Redux'},
    {class: 'iconify', dataIcon: 'simple-icons:adobephotoshop', dataInline: 'false', style: 'color: #73EEFF;', title: 'Photoshop'},
    {class: 'iconify', dataIcon: 'mdi:responsive', dataInline: 'false', style: 'color: #73EEFF;', title: 'Responsive'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
