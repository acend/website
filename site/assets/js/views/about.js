//import  Flickity from 'flickity-fade';
export default function() {

  const teamSection = document.querySelector('.team-list');
  
  if (teamSection) {
    
    // shuffle team
    for (let i = 0; i <= teamSection.children.length; i++) {      
      teamSection.appendChild(teamSection.children[Math.random() * i | 0]);
    } 
  

    const team = document.querySelectorAll('.person');    
    
    team.forEach((el) => {
      el.addEventListener('click', function() {
        el.classList.toggle('active');
      });
    });


    // Hide more than 6 team members
    const teamMembers = Array.from(team);
    const showMore = document.querySelector('.btn-showmore');
    let visibleCount = window.innerWidth > 768 ?  6 : 3;
    const counter = visibleCount


    teamMembers.slice(visibleCount).forEach(member => {
      member.classList.add('d-none');
    });


    showMore.addEventListener('click', function() {
      const hiddenMembers = teamMembers.slice(visibleCount, visibleCount + counter);
      hiddenMembers.forEach(member => {
      member.classList.remove('d-none');      
    });

    window.scrollTo({
      top: hiddenMembers[0].offsetTop - 100,
      behavior: 'smooth'
    });

    visibleCount += counter;
    
    if (visibleCount >= teamMembers.length) {
      showMore.classList.add('d-none');
      }
    });
  }

 

  // decode E-Mail  
  /*
  $('a.email').each(function(){
    $(this).attr('href', atob( $(this).attr('href')));
  });
  */


  /*
  if($('.team-carousel').length) {
      var flkty = new Flickity( '.team-carousel', {
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        cellAlign: 'left',
    });

    flkty.on( 'change', function( index ) {
      //console.log('Flickity change ' + index );
      //change URL while navigate through carousel
      let hash = $('.person-box').eq(index).find('.team-info-link').attr('data-name');
      if (hash) {
        location.hash = hash;
      }
    });


  }

  $('.team-info-link').on('click', function(){
    var index = $(this).parent().index();
    console.log(index)
    flkty.select( index,true,true );
  });


  $('.next-team-member').on('click', function(){
      flkty.next( true, true );
  });

  $('.prev-team-member').on('click', function(){
      flkty.previous( true, true );
  });

  
  $('.team-info-box_').on('show.bs.modal', function (e) {
    $(this).addClass('active');
  }).on('hide.bs.modal', function (e) {
    $('.team-info-box').removeClass('active');
  });

  $('#modalTeam').on('shown.bs.modal', function (e) {
    const hash = $(e.relatedTarget).attr('data-name');
    if (hash) {
      location.hash = hash;
      //window.history.replaceState('', document.title, hash);
    }

    flkty.resize();
  }).on('hide.bs.modal', function(){
    var noHashURL = window.location.href.replace(/#.*$/, '');
    window.history.replaceState('', document.title, noHashURL);
  });


  //fix for ios?
  var tapArea, startX ;
  tapArea = document.querySelectorAll('.carousel');
  startX = 0;
  for (var item of tapArea) {
      item.ontouchstart = function(e) {
          startX = e.touches[0].clientX;
      };
      item.ontouchmove = function(e) {
          if (Math.abs(e.touches[0].clientX - startX) > 5 && e.cancelable ) {
              e.preventDefault();
          }
      };
  }


  if($('#team').length) {
    if(location.hash) {

      const target = location.hash.split('#')[1];


      var destination = $('#team').offset().top - $('main').offset().top - 100;  
      $('body, html').animate({ scrollTop: destination }, 400 );
    
      setTimeout(function(){
        $('.team-info-link[data-name="'+target+'"]').trigger('click');
      },600);
    }
   }

*/
}