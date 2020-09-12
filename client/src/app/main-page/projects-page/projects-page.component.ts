import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core'

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss', './project-page.media.scss']
})
export class ProjectsPageComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel') carouselRef: ElementRef

  step = 0
  numberOfSlides = 0
  idx = 0
  carouselSlides = []

  slides = [
    {link: '../../../assets/mainPage/blog.svg', url: '/blog'},
    {link: '../../../assets/mainPage/todoList.svg', url: '/to-do'},
    {link: '../../../assets/mainPage/button.svg', url: '/button'},
    {link: '../../../assets/mainPage/learnWords.svg', url: '/words'},
    {link: '../../../assets/mainPage/shadowGenerator.svg', url: '/shadow'},
    {link: '../../../assets/mainPage/flexbox.svg', url: '/flexbox'},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.carouselSlides = [...this.carouselRef.nativeElement.children]
    this.numberOfSlides = this.carouselSlides.length
  }

  nextSlide() {
    this.step++
    const width = this.carouselSlides[0].clientWidth
    this.carouselSlides.forEach(slide => {
      slide.style.transform = `translateX(${(-width - 10) * this.step}px)`
      if (this.step === this.numberOfSlides - 1) {
        slide.style.transform = `translateX(0)`
        this.step = 0
      }
    })
  }

  prevSlide() {
    this.step--
    const width = this.carouselSlides[0].clientWidth
    this.carouselSlides.forEach(slide => {
      slide.style.transform = `translateX(${(-width - 10) * this.step}px)`
      if (this.step === -1) {
        this.step = 4
        slide.style.transform = `translateX(${(-width - 10) * this.step}px)`
      }
    })

  }
}
