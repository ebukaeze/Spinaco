import React, { Component } from 'react';

export class Sidebar extends Component{
render(){
    return(
   <div className="sidebar">
       
<div id="cl-wrapper">

  <div class="cl-sidebar">
    <div class="cl-toggle"><i class="fa fa-bars"></i></div>
    <div class="cl-navblock">
      <div class="menu-space">
        <div class="content">
        
          <ul class="cl-vnavigation">
            <li class="active" ><a href="/"><i class="fa fa-home"></i><span>Dashboard</span></a></li>
            <li><a href="#"><i class="fa fa-smile-o"></i><span>UI Elements</span></a>
              <ul class="sub-menu">
                <li  ><a href="ui-elements.html">General</a></li>
                <li  ><a href="ui-alerts.html">Alerts</a></li>
                <li  ><a href="ui-porlets.html">Porlets</a></li>
                <li  ><a href="ui-buttons.html">Buttons</a></li>
                <li  ><a href="ui-modals.html">Modals</a></li>
                <li  ><a href="ui-notifications.html">Notifications</a></li>
                <li  ><a href="ui-tiles.html">Tiles</a></li>
                <li  ><a href="ui-progress.html">Progress Bars</a></li>
                <li  ><a href="ui-icons.html">Icons</a></li>
                <li  ><a href="ui-grid.html">Grid</a></li>
                <li  ><a href="ui-tabs-accordions.html">Tabs & Accordions</a></li>
                <li  ><a href="ui-nestable-lists.html">Nestable Lists</a></li>
                <li  ><a href="ui-treeview.html">Tree View</a></li>
              </ul>
            </li>
            <li><a href="#"><i class="fa fa-list-alt"></i><span>Forms</span></a>
              <ul class="sub-menu">
                <li  ><a href="form-elements.html">Components</a></li>
                <li  ><a href="form-validation.html">Validation</a></li>
                <li  ><a href="form-wizard.html">Wizard</a></li>
                <li  ><a href="form-masks.html">Input Masks</a></li>
                <li  ><a href="form-wysiwyg.html">WYSIWYG Editor</a></li>
                <li  ><a href="form-upload.html">Multi Upload</a></li>
              </ul>
            </li>
            <li><a href="#"><i class="fa fa-table"></i><span>Tables</span></a>
              <ul class="sub-menu">
                <li><a href="tables-general.html">General</a></li>
                <li><a href="tables-datatables.html">Data Tables</a></li>
              </ul>
            </li>
            <li><a href="#"><i class="fa fa-map-marker nav-icon"></i><span>Maps</span></a>
              <ul class="sub-menu">
                <li  ><a href="maps.html">Maps</a></li>
                <li  ><a href="vector-maps.html">Vector Maps</a></li>
              </ul>
            </li>
            <li><a href="#"><i class="fa fa-envelope nav-icon"></i><span>Email</span></a>
              <ul class="sub-menu">
                <li  ><a href="email-inbox.html">Inbox</a></li>
                <li  ><a href="email-read.html">Email Detail</a></li>
              </ul>
            </li>
            <li  ><a href="typography.html"><i class="fa fa-text-height"></i><span>Typography</span></a></li>
            <li  ><a href="charts.html"><i class="fa fa-bar-chart-o"></i><span>Charts</span></a></li>
            <li><a href="#"><i class="fa fa-file"></i><span>Pages</span></a>
              <ul class="sub-menu">
                <li  ><a href="pages-blank.html">Blank Page</a></li>
                <li  ><a href="pages-blank-header.html">Blank Page Header</a></li>
                <li  ><a href="pages-blank-aside.html">Blank Page Aside</a></li>
                <li><a href="pages-login.html">Login</a></li>
                <li><a href="pages-404.html">404 Page</a></li>
                <li><a href="pages-500.html">500 Page</a></li>
                <li  ><a href="pages-gallery.html">Gallery</a></li>
                <li  ><a href="pages-timeline.html">Timeline</a></li>
                <li  ><a href="pages-code-editor.html">Code Editor</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="text-right collapse-button">
        <input type="text" class="form-control search" placeholder="Search..." />
        <button id="sidebar-collapse" class="btn btn-default"  class="fa fa-angle-left"></button>
      </div>
    </div>
  </div>

    </div>
   </div>
    );
}
}

export default Sidebar;