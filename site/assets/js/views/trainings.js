export default function() {
  const filterlist = document.querySelector('.filterlist');


  const anmeldeToggler = document.querySelector(".anmelde-toggler");
  if (anmeldeToggler) {

    anmeldeToggler.addEventListener('click', function() {
      document.querySelector('.box-anmelden .inner').classList.toggle('active');
    });
  }



  if (filterlist) {
    // helper function
    function containsAll(needles, haystack) {
      for (var i = 0, len = needles.length; i < len; i++) {
        if (haystack.indexOf(needles[i]) === -1) {
          return false;
        }
      }
      return true;
    }

    const doFilter = function () {
      var checked_values = Array.from(document.querySelectorAll('.btn-filter.active')).map(function (btn) {
        return btn.getAttribute('data-filter') !== 'all' ? btn.getAttribute('data-filter') : null;
      }).filter(Boolean); // ["cat1", "cat2", "cat3"]

      //console.log(checked_values, checked_values.length);

      if (checked_values.length) {
        Array.from(document.querySelectorAll('.item')).forEach(function (box) {
          // get all the classes from the object:
          var catsArray = box.getAttribute('class').split(' ');

          // variante 1 : alle filter müssen zutreffen:
          if (containsAll(checked_values, catsArray)) {
            box.classList.remove('d-none', 'filtered');
          } else {
            box.classList.add('d-none', 'filtered');
          }
        });

        //location.hash = checked_values.join(',');
      } else {
        Array.from(document.querySelectorAll('.item')).forEach(function (box) {
          box.classList.remove('d-none', 'filtered');
        });
        //location.hash = '';
      }
      // triger lozad
      window.dispatchEvent(new Event('resize'));
    };

    Array.from(document.querySelectorAll('.btn-filter:not(.btn-reset)')).forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('active');
        Array.from(btn.parentNode.querySelectorAll('.btn-filter:not(.btn-reset)')).forEach(function (sibling) {
          if (sibling !== btn) {
            sibling.classList.remove('active');
          }
        });
        doFilter();
      });
    });

    //activate filter on pageload with hash
    if (location.hash) {
      var filter = document.querySelector('.btn-filter[data-filter="' + location.hash.split('#')[1] + '"]');
      if (filter) {
        filter.click();
      }
    }
  }
}
