import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { LAYOUT_VERTICAL,LAYOUT_MODE, LAYOUT_WIDTH, LAYOUT_POSITION, TOPBAR, SIDEBAR_SIZE, SIDEBAR_VIEW, SIDEBAR_COLOR, SIDEBAR_IMAGE, DATA_PRELOADER } from '../layout.model';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.scss']
})

/**
 * Right Sidebar component
 */
export class RightsidebarComponent implements OnInit {

  layout: string | undefined;
  mode: string | undefined;
  width: string | undefined;
  position: string | undefined;
  topbar: string | undefined;
  size: string | undefined;
  sidebarView: string | undefined;
  sidebar: string | undefined;
  attribute : any;
  sidebarImage : any;
  preLoader : any;
  grd : any;

  @Output() settingsButtonClicked = new EventEmitter();

  constructor(private eventService: EventService, private offcanvasService: NgbOffcanvas) { }

  ngOnInit(): void {
    this.layout = LAYOUT_VERTICAL;
    this.mode = LAYOUT_MODE;
    this.width = LAYOUT_WIDTH;
    this.position = LAYOUT_POSITION;
    this.topbar = TOPBAR;
    this.size = SIDEBAR_SIZE;
    this.sidebarView = SIDEBAR_VIEW;
    this.sidebar = SIDEBAR_COLOR;
    this.sidebarImage = SIDEBAR_IMAGE;
    this.preLoader = DATA_PRELOADER;
    this.attribute = '';
  }

  ngAfterViewInit() { }

  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
   changeLayout(layout: string) {
    this.eventService.broadcast('changeLayout', layout);
  }

  // Add Active Class
  addActive(grdSidebar:any){
    this.grd = grdSidebar;
    document.documentElement.setAttribute('data-sidebar', grdSidebar)
    document.getElementById('collapseBgGradient')?.classList.toggle('show');
    document.getElementById('collapseBgGradient1')?.classList.add('active');
  }

  // Remove Active Class
  removeActive(){
    this.grd = '';
    document.getElementById('collapseBgGradient1')?.classList.remove('active');
    document.getElementById('collapseBgGradient')?.classList.remove('show');
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  //  Filter Offcanvas Set
  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
    setTimeout(() => {
      var layouttype = document.documentElement.getAttribute('data-layout')
      if (layouttype == 'vertical') {
        var vertical = document.getElementById('customizer-layout01') as HTMLInputElement;
         if (vertical != null) {
           vertical.setAttribute('checked', 'true');
         }
      }
      if (layouttype == 'horizontal') {
        const horizontal = document.getElementById('customizer-layout02');
        if (horizontal != null) {
          horizontal.setAttribute('checked', 'true');
        }
      }
      if (layouttype == 'twocolumn') {
        const Twocolumn = document.getElementById('customizer-layout03');
        if (Twocolumn != null) {
          Twocolumn.setAttribute('checked', 'true');
        }
      }     
    }, 100);
  }

  // Mode Change
  changeMode(mode: string) {
    this.mode = mode;    
    document.documentElement.setAttribute('data-layout-mode', mode)
  }

  // Width Change
  changeWidth(width: string,size: string) {
    this.width = width;    
    document.documentElement.setAttribute('data-layout-width', width);
    document.documentElement.setAttribute('data-sidebar-size', size)
  }

  // Position Change
  changePosition(position: string) {
    this.position = position;    
    document.documentElement.setAttribute('data-layout-position', position);
  }

  // Topbar Change
  changeTopColor(color: string) {
    this.topbar = color;    
    document.documentElement.setAttribute('data-topbar', color)
  }

  // Sidebar Size Change
  changeSidebarSize(size: string) {
    this.size = size;    
    document.documentElement.setAttribute('data-sidebar-size', size)
  }

  // Sidebar Size Change
  changeSidebar(sidebar: string) {
    this.sidebarView = sidebar;    
    document.documentElement.setAttribute('data-layout-style', sidebar);
  }

  // Sidebar Color Change
  changeSidebarColor(color: string) {
    this.sidebar = color;    
    document.documentElement.setAttribute('data-sidebar', color)
  }

  // Sidebar Image Change
  changeSidebarImage(img: string) {
    this.sidebarImage = img;  
    document.documentElement.setAttribute('data-sidebar-image', img);
  }

  // PreLoader Image Change
  changeLoader(loader: string) {
    this.preLoader = loader;  
    document.documentElement.setAttribute('data-preloader', loader);
    var preloader = document.getElementById("preloader");
      if (preloader) {
        setTimeout(function(){
          (document.getElementById("preloader") as HTMLElement).style.opacity = "0";
          (document.getElementById("preloader") as HTMLElement).style.visibility = "hidden";
      }, 1000);
    }
  }
  
}
