document.querySelectorAll('.osta').forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      var filmContainer = button.closest('.col');
      var film = filmContainer.querySelector('.film-title').textContent;
      var aeg = filmContainer.querySelector('.film-time').textContent.replace('Aeg: ', '');
      var url = 'istmebookimine.html?film=' + encodeURIComponent(film) + '&aeg=' + encodeURIComponent(aeg);
      window.location.href = url;
    });
  });

    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
    
      
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace("active", "");
        }
      
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

