import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage= 0;
  images = [
    {
      title:'Deniz Kum Güneş',
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Belgrad Ormanı',
      url:'https://images.unsplash.com/photo-1642104039745-46a75de8fb04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsZ3JhZCUyMG9ybWFuJUM0JUIxfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Maslak',
      url:'https://images.unsplash.com/photo-1646052584627-cf74a7870d5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFzbGFrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Ordu',
      url:'https://images.unsplash.com/photo-1691350535096-0777af9ad0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T3JkdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Teleferik',
      url:'https://images.unsplash.com/photo-1566762099691-e3dce1aa6459?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3JkdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Deniz Kum Güneş',
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Belgrad Ormanı',
      url:'https://images.unsplash.com/photo-1642104039745-46a75de8fb04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsZ3JhZCUyMG9ybWFuJUM0JUIxfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Maslak',
      url:'https://images.unsplash.com/photo-1646052584627-cf74a7870d5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFzbGFrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Ordu',
      url:'https://images.unsplash.com/photo-1691350535096-0777af9ad0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T3JkdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Teleferik',
      url:'https://images.unsplash.com/photo-1566762099691-e3dce1aa6459?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3JkdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Deniz Kum Güneş',
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Belgrad Ormanı',
      url:'https://images.unsplash.com/photo-1642104039745-46a75de8fb04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsZ3JhZCUyMG9ybWFuJUM0JUIxfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Maslak',
      url:'https://images.unsplash.com/photo-1646052584627-cf74a7870d5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFzbGFrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Ordu',
      url:'https://images.unsplash.com/photo-1691350535096-0777af9ad0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T3JkdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Teleferik',
      url:'https://images.unsplash.com/photo-1566762099691-e3dce1aa6459?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3JkdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Deniz Kum Güneş',
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Belgrad Ormanı',
      url:'https://images.unsplash.com/photo-1642104039745-46a75de8fb04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsZ3JhZCUyMG9ybWFuJUM0JUIxfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Maslak',
      url:'https://images.unsplash.com/photo-1646052584627-cf74a7870d5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFzbGFrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Ordu',
      url:'https://images.unsplash.com/photo-1691350535096-0777af9ad0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T3JkdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Teleferik',
      url:'https://images.unsplash.com/photo-1566762099691-e3dce1aa6459?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3JkdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Deniz Kum Güneş',
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Belgrad Ormanı',
      url:'https://images.unsplash.com/photo-1642104039745-46a75de8fb04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsZ3JhZCUyMG9ybWFuJUM0JUIxfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Maslak',
      url:'https://images.unsplash.com/photo-1646052584627-cf74a7870d5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFzbGFrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Ordu',
      url:'https://images.unsplash.com/photo-1691350535096-0777af9ad0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T3JkdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Teleferik',
      url:'https://images.unsplash.com/photo-1566762099691-e3dce1aa6459?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3JkdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
  ]


  PageIndex(index : number)
  {
    return Math.abs(this.currentPage - index)<5;
  }


  //changePage(number : number)
  //{
  //  this.currentPage= number;
  //}
}
